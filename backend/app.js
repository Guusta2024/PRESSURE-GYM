const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: 'localhost',  // ou o IP do seu servidor MySQL
    user: 'root',
    password: '',
    database: 'iron pressure'
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});
connection.query("SELECT id, nome, nascimento FROM alunos", function(err, rows, fields){
    if (!err){
        console.log("Resultados:", rows)
    }else{
        console.log("Erro: Consulta não realizada co sucesso!")
    }
})