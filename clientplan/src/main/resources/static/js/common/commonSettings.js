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
                功能\
					</li>\
            <li class="nav-item">\
                <a href="/planModify" class="nav-link" id="planModify_sidebar">\
                    <i class="icon-drop"></i>新建计划</a>\
            </li>\
        </ul>';
    $(".sidebar-nav").html(sidebarContent);
}

function modifyNavbar ()
{
    $(".app-header > .d-md-down-none").html();
}

// <span class="badge badge-primary">NEW</span>

modifySidebar();
modifyNavbar();