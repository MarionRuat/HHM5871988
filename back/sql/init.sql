CREATE TABLE tintin 
( 
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    titre VARCHAR(90) UNIQUE, 
    stock VARCHAR(90), 
    prix VARCHAR(90), 
    magasin VARCHAR(90) ,
    image VARCHAR (250)
);