var imgArr = ['http://img03.taobaocdn.com/imgextra/i3/187929522/TB2_ibGcXXXXXaNXpXXXXXXXXXX_!!187929522.jpg', 'http://img01.taobaocdn.com/imgextra/i1/187929522/TB2wSbhcXXXXXbJXXXXXXXXXXXX_!!187929522.jpg'];
var random = parseInt(Math.random() * 2);
document.getElementsByClassName('bg')[0].src = imgArr[random];