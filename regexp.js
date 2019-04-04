const regex2 = /ab+c/;
// console.log(regex2)

const regex1 = /^[a-aA-z]+[0-9]*\W?_$/gi
// console.log(regex1)

let regex = new RegExp('ab+c')
// console.log(regex)




console.log('abbbcd'.match(/b*/).join(',')) // 什么也不显示
console.log('abbbcd'.match(/ab*/).join(' ')) // abbb

console.log('abbbbcd'.match(/b+/).join(',')) //bbbb
console.log('abbbbcd'.match(/bb+/).join(',')) //bbbb

console.log('abbbbcd'.match(/ab?/).join(',')) //ab
console.log('angel'.match(/e?le?/).join(',')) // el

console.log('123abc'.match(/\d+/).join(',')) // 123
console.log('123abc'.match(/\d+?/).join(',')) // 1



console.log('abbbbcd'.match(/.b/).join(',')) // ab
console.log('abbbbcd'.match(/.d/).join(',')) // cd
console.log('a\rbbbbcd'.match(/.b/).join(',')) // bb
console.log('a\nbbbbcd'.match(/.b/).join(',')) // bb





console.log('abbbbcd'.match(/.b/).join(',')) // ab
console.log('abbbbcd'.match(/.d/).join(',')) // cd
console.log('a\rbbbbcd'.match(/.b/).join(',')) // bb
console.log('a\nbbbbcd'.match(/.b/).join(',')) // bb
console.log('bar foo'.replace(/(...)(...)/,
    '$2 $1')) //  fo baro
console.log('bar foo'.replace(/(...)(...)/,
    '$1 $1')) // bar baro

console.log('barfoo'.replace(/(...)(...)/,
    '$2 $1')) // foo bar
console.log('barfoo'.replace(/(...)(...)/,
    '$1 $1')) // bar bar

console.log('foobarfoobar'.match(/(foo)(bar) \1\2/)) // null  这个还没看懂
console.log('foobarfoo'.match(/(foo)(bar)/).join(',')) // foobar,foo,bar



console.log('foo'.match(/(?:foo){1,2}/).join(',')) // foo
console.log('foofoo'.match(/(?:foo){1,2}/).join(',')) // foofoo
console.log('foofoofoo'.match(/(?:foo){1,2}/).join(',')) // foofoo
console.log('foofoofoo'.match(/foo{1,2}/).join(',')) // foo
console.log('foooofoo'.match(/foo{1,2}/).join(',')) // foo0


console.log('jsong'.match(/jsong(?=neu)/)) // null
console.log('jsongneu'.match(/jsong(?=neu)/).join(',')) // jsong
console.log('jsongmaster'.match(/jsong(?=neu|master)/).join(',')) // jsong
console.log('jsongneu'.match(/jsong(?=neu|master)/).join(',')) // jsong




console.log('jsong'.match(/jsong(?!neu)/).join(',')) // jsong
console.log('jsongHAHA'.match(/jsong(?!neu)/).join(',')) // jsong
console.log('jsongss'.match(/jsong(?!neu|master)/).join(',')) // jsong
console.log('jsongneu'.match(/jsong(?!neu|master)/)) // null


console.log('jsongneu'.match(/jsong|neu/).join(',')) // jsong
console.log('songneu'.match(/jsong|neu/).join(',')) // neu


console.log('ab'.match(/a{2}/)) // null
console.log('aba'.match(/a{2}/)) // null
console.log('aab'.match(/a{2}/).join()) // aa
console.log('aaab'.match(/a{2}/).join()) // aa
console.log('aabb'.match(/ab{2}/).join()) // aa
console.log('aabcab'.match(/ab{2}/)) // null
console.log('aacbb'.match(/ab{2}/)) // null
console.log('aaab'.match(/a{2}/).join()) // aa


console.log('aaab'.match(/a{2,3}/).join()) // aa
console.log('aabab'.match(/a{2,3}/).join()) // aa
console.log('ababab'.match(/a{2,3}/)) // null



console.log('abc'.match(/[a-r]/).join()) // a
console.log('abc'.match(/[ab]/).join()) // a
console.log('a'.match(/[a-c.]/).join()) // a
console.log('.'.match(/[a-c.]/).join()) // .
console.log('w.'.match(/[\w.]/).join()) // w
console.log('.'.match(/[\w.]/).join()) // .



console.log('abcd'.match(/[^a-c]/).join()) // d
console.log('a'.match(/[^a-c.]/)) // null
console.log('.'.match(/[^a-c.]/)) // null
console.log('a.'.match(/[^\c.]/).join()) // a
console.log('a'.match(/[^w.]/).join()) // a
console.log('.'.match(/[^\w.]/)) // null



console.log('\b'.match(/[\b]/).join()) // 



console.log('moon'.match(/\bm/).join()) // m
console.log('moon'.match(/oo\b/)) // null
console.log('moon'.match(/oon\b/).join()) // oon
console.log('oon'.match(/\boon\b/).join()) // oon


console.log('moon'.match(/\Bm/)) // null
console.log('moon'.match(/oo\B/).join()) // oo
console.log('possibly yesterday'.match(/yes\B/).join()) // yes



console.log('control-M'.match(/\cM/)) // null


console.log('1'.match(/\d/).join()) // 1
console.log('23'.match(/\d/).join()) // 2


console.log('1'.match(/\D/)) // null
console.log('2b'.match(/\D/).join()) // b

console.log('1'.match(/[^0-9]/)) // null
console.log('2b'.match(/[^0-9]/).join()) // b



console.log('\f'.match(/\f/)) // 空的

console.log('\n'.match(/\n/)) // 空的

console.log('\r'.match(/\r/)) // 空的



console.log('foo bar'.match(/\s\w*/).join()) // bar
console.log(' a'.match(/\sa/).join()) // a

console.log('foo bar'.match(/\S\w*/).join()) // foo
console.log('ba'.match(/\Sa/).join()) // ba


console.log('foo bar'.match(/\w/).join()) // f
console.log('_foo bar'.match(/\w/).join()) // _
console.log('1foo bar'.match(/\w/).join()) // 1



console.log('%foo bar'.match(/\W/).join()) // %
console.log('$foo bar'.match(/\W/).join()) // $



console.log('apple, orange, cherry, peach.'.match(/apple(,)\sorange\1/).join(' ')) // apple, orange, ,

console.log('apple, orange, cherry, peach.apple, orange, cherry, peach.'.match(/apple(,)\sorange\0/).join(' ')) // apple, orange, ,

console.log(''.match(/\0/))


