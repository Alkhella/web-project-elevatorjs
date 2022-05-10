

// set server host
elevator.server_host = 'http://localhost/test_elevator/';

// set meta content
elevator.meta_content_url = 'include/meta-content.php';

// http routes

elevator.http_routes([
    {
        method: "GET",
        meta_loader: true,
        content_url: "components/index-component.php",
        component: "#root",
        preloader: '',
        error_handler: 'error',
        http_url_change: false,
        http_url: "/"
    },
    {
        method: "GET",
        meta_loader: true,
        content_url: "components/index-component.php",
        component: "#root",
        preloader: '',
        error_handler: 'error',
        http_url_change: false,
        http_url: "index.php"
    },
    {
        method: "GET",
        meta_loader: true,
        content_url: "components/about-component.php",
        component: "#root",
        preloader: '',
        error_handler: 'error',
        http_url_change: false,
        http_url: "about.php"
    },
    {
        method: "GET",
        meta_loader: true,
        content_url: "components/service-component.php",
        component: "#root",
        preloader: '<h1>loading...</h2>',
        error_handler: 'error',
        http_url_change: false,
        http_url: "service.php"
    },
]);

// set  pages headers
elevator.page_headers_content([
    {
        method: "GET",
        content_url: "components/header-layout/header-component.php",
        component: "#header_load",
        preloader: '',
        error_handler: 'error',
        http_url_change: false,
        http_url: "/"
     },
    {
       method: "GET",
       content_url: "components/header-layout/header-component.php",
       component: "#header_load",
       preloader: '',
       error_handler: 'error',
       http_url_change: false,
       http_url: "index.php"
    },
    {
        method: "GET",
        content_url: "components/header-layout/header-component.php",
        component: "#header_load",
        preloader: '',
        error_handler: 'error',
        http_url_change: false,
        http_url: "about.php"
     },
     {
        method: "GET",
        content_url: "components/header-layout/header-component.php",
        component: "#header_load",
        preloader: '',
        error_handler: 'error',
        http_url_change: false,
        http_url: "service.php"
     },
]);

elevator.page_footers_content([
    {
        method: "GET",
        content_url: "components/footer-layout/footer-component.php",
        component: "#footer_load",
        preloader: '',
        error_handler: 'error',
        http_url_change: false,
        http_url: "/"
     },
    {
       method: "GET",
       content_url: "components/footer-layout/footer-component.php",
       component: "#footer_load",
       preloader: '',
       error_handler: 'error',
       http_url_change: false,
       http_url: "index.php"
    },
    {
        method: "GET",
        content_url: "components/footer-layout/footer-component.php",
        component: "#footer_load",
        preloader: '',
        error_handler: 'error',
        http_url_change: false,
        http_url: "about.php"
     },
     {
        method: "GET",
        content_url: "components/footer-layout/footer-component.php",
        component: "#footer_load",
        preloader: '',
        error_handler: 'error',
        http_url_change: false,
        http_url: "service.php"
     },
]);

// rendering
elevator.__render();
