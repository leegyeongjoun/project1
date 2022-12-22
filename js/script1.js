$(function(){
    const tabList = $('.tabs');
    
    
    function tabMenu(e){
        e.preventDefault();
        let $this=$(this)
        $this.next('ul').show().parent('li').addClass('act')
        .siblings('li').removeClass('act').find('ul').hide();
    }
    
    tabList.find('>ul>li>a').click(tabMenu).focus(tabMenu) 
    // 하위 find
    });

    
