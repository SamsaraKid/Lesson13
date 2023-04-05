
// коты
// function f1(x='Qwerty',y=10+x){
//     $('#d1').html('<h2>'+x+'</h2> <img src="../img/cat1.1.jpg" width="300px">')
//     alert(x)
// }
//
//
//
// $('#but1').click(function (){
//     f1('Hello')
// })
// $('#but2').click(function (){
//     f1('Bye')
// })

let count = 1


function f1(x){
    if (x==='B'){
        $('#res').text('Б'+count)
        $('#image').html('<img src="../img/bank.png" width="300px">')
        $('div').css('background-color','blue')
        $('h2').css('color','white')
        count++
    }
    if (x==='C'){
        $('#res').text('Ц'+count)
        $('#image').html('<img src="../img/circ.png" width="300px">')
        $('div').css('background-color','yellow')
        $('h2').css('color','blue')
        count++
    }
    if (x==='Z'){
        $('#res').text('З'+count)
        $('#image').html('<img src="../img/zoo.png" width="300px">')
        $('div').css('background-color','red')
        $('h2').css('color','green')
        count++
    }
}

$('#bank').click(function (){
    f1('B')
})
$('#circ').click(function (){
    f1('C')
})
$('#zoo').click(function (){
    f1('Z')
})