-- Define the list of restricted IDs
SET @restricted_ids = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,23,40,77';

-- Determine the starting ID based on the current maximum ID in the Language table
SET @next_id = (SELECT COALESCE(MAX(id), 0) + 1 FROM Language);

-- Create a temporary table to store new languages with assigned IDs
CREATE TEMPORARY TABLE TempLanguages (
    id INT,
    name VARCHAR(50),
    code VARCHAR(10)
);

-- Insert languages into TempLanguages with NULL for id initially
INSERT INTO TempLanguages (id, name, code)
VALUES 
    (NULL, 'Afrikaans', 'af'),
    (NULL, 'Albanian', 'sq'),
    (NULL, 'Amharic', 'am'),
    (NULL, 'Arabic', 'ar'),
    (NULL, 'Armenian', 'hy'),
    (NULL, 'Azerbaijani', 'az'),
    (NULL, 'Basque', 'eu'),
    (NULL, 'Belarusian', 'be'),
    (NULL, 'Bengali', 'bn'),
    (NULL, 'Bosnian', 'bs'),
    (NULL, 'Catalan', 'ca'),
    (NULL, 'Chinese', 'zh'),
    (NULL, 'Corsican', 'co'),
    (NULL, 'Croatian', 'hr'),
    (NULL, 'Czech', 'cs'),
    (NULL, 'Danish', 'da'),
    (NULL, 'Dutch', 'nl'),
    (NULL, 'Esperanto', 'eo'),
    (NULL, 'Estonian', 'et'),
    (NULL, 'Finnish', 'fi'),
    (NULL, 'Galician', 'gl'),
    (NULL, 'Georgian', 'ka'),
    (NULL, 'Gujarati', 'gu'),
    (NULL, 'Haitian Creole', 'ht'),
    (NULL, 'Hausa', 'ha'),
    (NULL, 'Hawaiian', 'haw'),
    (NULL, 'Icelandic', 'is'),
    (NULL, 'Indonesian', 'id'),
    (NULL, 'Irish', 'ga'),
    (NULL, 'Javanese', 'jv'),
    (NULL, 'Kannada', 'kn'),
    (NULL, 'Khmer', 'km'),
    (NULL, 'Kurdish', 'ku'),
    (NULL, 'Kyrgyz', 'ky'),
    (NULL, 'Lao', 'lo'),
    (NULL, 'Latin', 'la'),
    (NULL, 'Luxembourgish', 'lb'),
    (NULL, 'Macedonian', 'mk'),
    (NULL, 'Malagasy', 'mg'),
    (NULL, 'Malayalam', 'ml'),
    (NULL, 'Maltese', 'mt'),
    (NULL, 'Maori', 'mi'),
    (NULL, 'Mongolian', 'mn'),
    (NULL, 'Nepali', 'ne'),
    (NULL, 'Pashto', 'ps'),
    (NULL, 'Punjabi', 'pa'),
    (NULL, 'Samoan', 'sm'),
    (NULL, 'Scots Gaelic', 'gd'),
    (NULL, 'Sesotho', 'st'),
    (NULL, 'Shona', 'sn'),
    (NULL, 'Sindhi', 'sd'),
    (NULL, 'Sinhala', 'si'),
    (NULL, 'Sundanese', 'su'),
    (NULL, 'Swahili', 'sw'),
    (NULL, 'Tajik', 'tg'),
    (NULL, 'Tamil', 'ta'),
    (NULL, 'Telugu', 'te'),
    (NULL, 'Uzbek', 'uz'),
    (NULL, 'Welsh', 'cy'),
    (NULL, 'Xhosa', 'xh'),
    (NULL, 'Yiddish', 'yi'),
    (NULL, 'Yoruba', 'yo'),
    (NULL, 'Zulu', 'zu'),
    (NULL, 'Tigrinya', 'ti'),
    (NULL, 'Faroese', 'fo'),
    (NULL, 'Tongan', 'to'),
    (NULL, 'Bislama', 'bi'),
    (NULL, 'Tswana', 'tn'),
    (NULL, 'Fijian', 'fj'),
    (NULL, 'Marshallese', 'mh'),
    (NULL, 'Sichuan Yi', 'ii'),
    (NULL, 'Navajo', 'nv'),
    (NULL, 'Chechen', 'ce'),
    (NULL, 'Sango', 'sg'),
    (NULL, 'Limburgish', 'li'),
    (NULL, 'Lingala', 'ln'),
    (NULL, 'Maldivian', 'dv'),
    (NULL, 'Aymara', 'ay'),
    (NULL, 'Breton', 'br'),
    (NULL, 'Guarani', 'gn'),
    (NULL, 'Inuktitut', 'iu'),
    (NULL, 'Occitan', 'oc'),
    (NULL, 'Ojibwa', 'oj'),
    (NULL, 'Quechua', 'qu'),
    (NULL, 'Walloon', 'wa'),
    (NULL, 'Yakut', 'sah'),
    (NULL, 'Macedo-Romanian', 'rup'),
    (NULL, 'Sorbian', 'wen');

-- Assign IDs to each entry in TempLanguages while skipping restricted IDs
UPDATE TempLanguages
SET id = (
    SELECT @next_id := @next_id + 1
    FROM (SELECT 1) AS dummy
    WHERE FIND_IN_SET(@next_id, @restricted_ids) = 0
)
WHERE id IS NULL;

-- Insert new languages into the Language table if they don't already exist
INSERT INTO Language (id, name, code)
SELECT id, name, code
FROM TempLanguages
WHERE NOT EXISTS (
    SELECT 1 FROM Language WHERE Language.name = TempLanguages.name OR Language.code = TempLanguages.code
);

-- Drop the temporary table
DROP TEMPORARY TABLE TempLanguages;
