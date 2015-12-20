$(document).ready(function(){
    $(".category-list__item").click(function(){
        var $this = this;
        $($this).siblings(".category-list__item").removeClass("category-list__item--active");
        $($this).addClass("category-list__item--active");
    });

    $(".shop-item__footer").hover(function(){
        var $this = this;
        var itemName = $($this).find(".shop-item__item-name");
        var itemOptionPanel = $($this).find(".items-option-panel");
        itemName.fadeToggle();
        itemOptionPanel.fadeToggle();
    });

    $(".js-dropdown-list").click(function(){
        var $this = this;
        var iconDropDown = $($this).find(".global-sort-of__icon-dropdown");
        var dropWrapper =  $($this).find(".global-sort-of__drop-wrapper");
        var productIconDropDown = $($this).find(".product-controls__icon-dropdown");
        var productDropWrapper = $($this).find(".product-controls__drop-wrapper");
        iconDropDown.toggleClass("js-arrow-rotate-up");
        dropWrapper.slideToggle();

        productIconDropDown.toggleClass("js-arrow-rotate-up");
        productDropWrapper.slideToggle();
    });
});
