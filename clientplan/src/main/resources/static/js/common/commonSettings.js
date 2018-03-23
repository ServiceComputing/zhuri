function modifySidebar ()
{
    var sidebarContent = 
        '<ul class="nav">\
            <li class="nav-item">\
                <a class="nav-link" href="/checkPlan">\
                    <i class="icon-speedometer"></i> Dashboard\
                </a>\
            </li>\
            <li class="nav-title">\
                Modules\
					</li>\
            <li class="nav-item">\
                <a href="/planModify" class="nav-link" id="planModify_sidebar">\
                    <i class="icon-drop"></i>Create Plan</a>\
            </li>\
            <li class="nav-item">\
                <a href="/templateModify" class="nav-link" id="templateModify_sidebar">\
                    <i class="icon-drop"></i>Create Template</a>\
            </li>\
        </ul>';
    $(".sidebar-nav").html(sidebarContent);
}

function modifyNavbar ()
{
    $(".app-header > .d-md-down-none").html("");
}

function modifyFooter ()
{
    var footerContent = 
        '<span class="ml-auto">Powered by\
			<a href="#">Zhuri</a>\
        </span>';
    $(".app-footer").html(footerContent);
}

// <span class="badge badge-primary">NEW</span>

modifySidebar();
modifyNavbar();
modifyFooter();

function redirectLinks (links)
{
    var ua = window.navigator.userAgent;
    var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
    if (isSafari)
    {
        location = links;
    }
    else
    {
        window.location.href = links;
    }
}