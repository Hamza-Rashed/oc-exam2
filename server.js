const   
    express = require('express'),
    app = express(),
    PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/Files/OC_Exam_1/27"))
app.use(express.static(__dirname + "/Files/OC_Exam_2"))
app.use(express.static(__dirname + "/Files/OC_Exam_3"))
app.use(express.static(__dirname + "/Files/OC_Exam_4"))

app.get('/' , (req , res)=>{
    res.sendFile("/index.html")
})

app.listen(PORT)