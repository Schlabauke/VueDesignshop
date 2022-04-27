const { _getDB } = require('./db');

//get All shopItems
async function getAllItems() {
    const db = await _getDB();
    const shopItems = await db.collection('shopitems').find().toArray();

    return shopItems;
}

module.exports = {
    getAllItems,
};
