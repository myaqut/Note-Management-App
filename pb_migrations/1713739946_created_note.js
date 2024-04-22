/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ridqe9xxvv16x6e",
    "created": "2024-04-21 22:52:26.243Z",
    "updated": "2024-04-21 22:52:26.243Z",
    "name": "note",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dw4itbst",
        "name": "content",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ulg7jhgf",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ridqe9xxvv16x6e");

  return dao.deleteCollection(collection);
})
