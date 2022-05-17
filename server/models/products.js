const mysqlcon = require('../../connection');

//create table products

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS products(
        product_id int(10) primary key,
        img varchar(56),
        category varchar(22),
        product_name varchar(66),
        price int(10)
        )`;
    mysqlcon.query(sql);
  }

//update initial products

function add() {
    mysqlcon.query('select * from products', function (err, result) {
        if(result.length === 0){ 
            let sqlrun = `insert into products values
            (1, "Images/card1.png", 'Women', 'Women floral summer wear', 120), 
            (2, "Images/card2.png", 'Men', 'Men Tee', 49),
            (3, "Images/card3.png", 'Men', "Men Full Sleeve Tee", 66),
            (4, "Images/card4.png", 'Women', "One Piece", 78),
            (5, "Images/card5.png", 'Men', "Men Black Shirt", 99),
            (6, "Images/card6.png", 'Men', "Men Black Shirt", 66),
            (7, "Images/card7.png", 'Men', "Men Black Shirt", 109),
            (8, "Images/card8.png", 'Men', "Men Shirt", 111),
            (9, "Images/card9.png", 'Accessories', "Shoes", 78),
            (10, "Images/card10.png", 'Accessories', "Shoes", 43),
            (11, "Images/card11.png", 'Accessories', "Shoes", 99),
            (12, "Images/card12.png", 'Accessories', "Shoes", 86),
            (13, "Images/product image 1.png", 'Men', "Men Tee", 99)
            `;
            mysqlcon.query(sqlrun, (err, result) => {
                if(err) throw err;
            });
}
});
}  


  module.exports = {create, add};