

const main = {

    init: function(){
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function(){
        this.$checkButtons = document.querySelectorAll('.check')
        
    },

    bindEvents: function(){
        
        const self = this

        this.$checkButtons.forEach(function (button){
            button.onclick = self.Events.checkButtons_click
            
        })
    },


    Events: {
        checkButtons_click: function(e){
           const li = e.target.parentElement 
           const isDone = li.classList.contains('done')
           console.log(e)
           if (!isDone) {
                li.classList.add('done')
                return
           }
           
           li.classList.remove('done')
        }
    }
}

main.init()