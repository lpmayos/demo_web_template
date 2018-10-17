(function($){
    $(document).ready(function(){

        //i18next - Multilingual support
        //-----------------------------------------------

        i18n.init({
            fallbackLng: false,     // fallback quando não definir linguagem
            debug: true,            // debug do plugin
            fixLng: true,           // preserva o cookie quando a linguagem for definida
            load: 'current'         // define a forma correta de declarar linguagens
        },
          
        function(translation) {
            $('[data-i18n]').i18n();
            var appName = translation('app.name');
        });
        
        $('#catalan').on('click', function() {
            i18n.setLng('ca', {fixLng: true}, function(translation){
                $('[data-i18n]').i18n();
            });
        });

        $('#english').on('click', function() {
            i18n.setLng('en', {fixLng: true}, function(translation){
                $('[data-i18n]').i18n();
            });
        });


    });
})(this.jQuery);