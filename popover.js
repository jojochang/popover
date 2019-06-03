var log = console.log.bind(console)
var e = (selector) => {
    var element = document.querySelector(selector)
    return element
}


// 点击button按钮显示或隐藏box
var show = () => {
    var box = e('.box-class')
    var btn = e('.btn')
    btn.addEventListener('click', (event) => {
        if (!box.classList.contains('show')) {
            // 显示box
            box.classList.add("show")
        } else {
            // 隐藏box
            box.classList.remove("show")
        }
    })
}


// 点击其他区域 隐藏box
var hidden = () => {
    var cot = e('.container')
    var box = e('.box-class')
    cot.addEventListener('click', (event) => {
        var self = event.target
        // log(self)
        if (!self.classList.contains('btn') && !self.classList.contains('box-class')) {
            box.classList.remove('show')
        }
    })
}

show()

hidden()