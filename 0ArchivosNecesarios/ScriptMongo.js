use agenda;
db.createCollection('age_usuario');
db.createCollection('age_agenda');
db.age_usuario.insert({"id":1,"nombre":"Juan Perez", "email":"J@hotmail.com","psw":"54321"});
db.age_usuario.insert({"id":2,"nombre":"Maria Juarez", "email":"M@hotmail.com","psw":"54321"});
db.age_agenda.insert({"id":0,"title":"Ejemplo", "allDay":false, "start":"2018-01-01","end":"2018-01-01","email":"n@hotmail.com"});