crate database "my_project";

use database "my_project";

create table transacoes (
    id  INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    transactionValue double NOT NULL,
    transactionType varchar(7),
    descricao text,
    category varchar(40),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);
