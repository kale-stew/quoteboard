# Quoteboard

A place for quotes!

## Tech Stack

Auth to be handled in <TBD>

QuoteDB to be hosted in <TBD>

This is my effort at using `urql` in a personal project!

## API Details

A single `user` obj:

```json
[..., {
  "userId": "aR4nd0muSerId",
  "firstName": "Kylie",
  "lastName": "Stewart",
  "email": "kylie@kyliestewart.tech",
  "groups": ["ar4ndomGr0upId", "aN0tH3r0n3"]
}]
```

A single `group` obj:

```json
[..., {
  "groupName": "Cool Cats & Kittens",
  "groupId": "aN0tH3r0n3",
  "groupAdmins": ["aR4nd0muSerId"]
}]
```

A single `quote` obj:

```json
[..., {
  "quoteText": "lol poop",
  "quoteAuthor": "aR4nd0muSerId",
  "quoteId": "qu0t3Id",
  "votes": 9,
  "totalUp": 12,
  "totalDown": 3
}]
```
