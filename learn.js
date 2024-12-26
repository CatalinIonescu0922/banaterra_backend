const express = require('express');
const router = express.Router();
const axios = require('axios');
const db = require('./dbconnect');  // Ensure your DB connection is correctly set up

// Function to perform translation using LibreTranslate API
async function translateText(text, sourceLang = 'et', targetLang = 'en') {  // Defaulting source to Estonian and target to English
    try {
        // LibreTranslate instance
        const url = 'https://translate.astian.org/translate';

        // Split text if it's too long
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

        const translatedSentences = await Promise.all(
            sentences.map(async (sentence) => {
                const response = await axios.post(url, {
                    q: sentence,
                    source: sourceLang,
                    target: targetLang,
                    format: "text"
                }, {
                    headers: { 'Content-Type': 'application/json' }
                });
                return response.data.translatedText || sentence;  // Return sentence if no translation occurs
            })
        );

        // Join translated sentences back together
        return translatedSentences.join(' ');
    } catch (error) {
        console.error('Translation API error:', error);
        return text;  // Return the original text if translation fails
    }
}

router.get('/:languageId/:targetLangCode', async (req, res) => {
    const { languageId, targetLangCode } = req.params;

    try {
        const quotesQuery = `SELECT quote FROM Quote WHERE language_id = ?;`;
        const quotesResult = await db.pool.query(quotesQuery, [languageId]);  // Adjust this if using pool or another DB setup method
        const translations = await Promise.all(quotesResult.map(async (item) => {
            const translatedText = await translateText(item.quote, 'en', targetLangCode);  // Ensure 'en' is the correct source language
            return {
                original: item.quote,
                translation: translatedText
            };
        }));

        res.json(translations);
    } catch (err) {
        console.error("Database error:", err);
        res.status(500).send('Server error');
    }
});

module.exports = router;
