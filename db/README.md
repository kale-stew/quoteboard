## Schemas

#### Users Table
Value | Data Type
----- | ---------
id | INT, NOT NULL
name | VARCHAR(20), NOT NULL
img | TEXT
email | TEXT, NOT NULL

#### Quotes Table
Value | Data Type
----- | --------
quoteId | INT, NOT NULL
text | VARCHAR(280), NOT NULL
author | VARCHAR(20)
authorId | INT