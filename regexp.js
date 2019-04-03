const regex2 = /ab+c/;
// console.log(regex2)

const regex1 = /^[a-aA-z]+[0-9]*\W?_$/gi
// console.log(regex1)

let regex = new RegExp('ab+c')
// console.log(regex)




// console.log('abbbcd'.match(/b*/).join(',')) // 什么也不显示
// console.log('abbbcd'.match(/ab*/).join(' ')) // abbb

// console.log('abbbbcd'.match(/b+/).join(',')) //bbbb
// console.log('abbbbcd'.match(/bb+/).join(',')) //bbbb

// console.log('abbbbcd'.match(/ab?/).join(',')) //ab
// console.log('angel'.match(/e?le?/).join(',')) // el

// console.log('123abc'.match(/\d+/).join(',')) // 123
// console.log('123abc'.match(/\d+?/).join(',')) // 1



// console.log('abbbbcd'.match(/.b/).join(',')) // ab
// console.log('abbbbcd'.match(/.d/).join(',')) // cd
// console.log('a\rbbbbcd'.match(/.b/).join(',')) // bb
// console.log('a\nbbbbcd'.match(/.b/).join(',')) // bb





// console.log('abbbbcd'.match(/.b/).join(',')) // ab
// console.log('abbbbcd'.match(/.d/).join(',')) // cd
// console.log('a\rbbbbcd'.match(/.b/).join(',')) // bb
// console.log('a\nbbbbcd'.match(/.b/).join(',')) // bb
// console.log('bar foo'.replace(/(...)(...)/,
//     '$2 $1')) //  fo baro
// console.log('bar foo'.replace(/(...)(...)/,
//     '$1 $1')) // bar baro

// console.log('barfoo'.replace(/(...)(...)/,
//     '$2 $1')) // foo bar
// console.log('barfoo'.replace(/(...)(...)/,
//     '$1 $1')) // bar bar

// console.log('foobarfoobar'.match(/(foo)(bar) \1\2/)) // null  这个还没看懂
// console.log('foobarfoo'.match(/(foo)(bar)/).join(',')) // foobar,foo,bar



// console.log('foo'.match(/(?:foo){1,2}/).join(',')) // foo
// console.log('foofoo'.match(/(?:foo){1,2}/).join(',')) // foofoo
// console.log('foofoofoo'.match(/(?:foo){1,2}/).join(',')) // foofoo
// console.log('foofoofoo'.match(/foo{1,2}/).join(',')) // foo
// console.log('foooofoo'.match(/foo{1,2}/).join(',')) // foo0


// console.log('jsong'.match(/jsong(?=neu)/)) // null
// console.log('jsongneu'.match(/jsong(?=neu)/).join(',')) // jsong
// console.log('jsongmaster'.match(/jsong(?=neu|master)/).join(',')) // jsong
// console.log('jsongneu'.match(/jsong(?=neu|master)/).join(',')) // jsong




// console.log('jsong'.match(/jsong(?!neu)/).join(',')) // jsong
// console.log('jsongHAHA'.match(/jsong(?!neu)/).join(',')) // jsong
// console.log('jsongss'.match(/jsong(?!neu|master)/).join(',')) // jsong
// console.log('jsongneu'.match(/jsong(?!neu|master)/)) // null


// console.log('jsongneu'.match(/jsong|neu/).join(',')) // jsong
// console.log('songneu'.match(/jsong|neu/).join(',')) // neu


// console.log('ab'.match(/a{2}/)) // null
// console.log('aba'.match(/a{2}/)) // null
// console.log('aab'.match(/a{2}/).join()) // aa
// console.log('aaab'.match(/a{2}/).join()) // aa
// console.log('aabb'.match(/ab{2}/).join()) // aa
// console.log('aabcab'.match(/ab{2}/)) // null
// console.log('aacbb'.match(/ab{2}/)) // null
// console.log('aaab'.match(/a{2}/).join()) // aa


console.log('aaab'.match(/a{2,3}/).join()) // aa
console.log('aabab'.match(/a{2,3}/).join()) // aa
console.log('ababab'.match(/a{2,3}/)) // null