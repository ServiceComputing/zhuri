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