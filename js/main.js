jQuery(document).ready(
    function () {
        jQuery('.mip-drop-nav').change(
            function () {
                let url = jQuery(this).val(), 
                    destination = jQuery(this).find(':selected').data('target');
                if (typeof destination !== 'undefined') {
                    window.open(url, destination);
                } else {
                    document.location.href = url;
                }
            }
        );
    }
);