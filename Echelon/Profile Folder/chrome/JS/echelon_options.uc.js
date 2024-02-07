// ==UserScript==
// @name			Echelon :: Options
// @description 	Adds the menu item to launch Echelon's Options window
// @author			aubymori
// @include			main
// ==/UserScript==

{
    var { waitForElement } = ChromeUtils.import("chrome://userscripts/content/echelon_utils.uc.js");
    waitForElement = waitForElement.bind(window);

    function launchEchelonOptions()
    {
        window.openDialog(
            "chrome://userchrome/content/windows/options/options.xhtml",
            "Echelon Options",
            "chrome,centerscreen,resizeable=no,dependent"
        ); 
    }

    waitForElement("#menu_ToolsPopup").then((prefsItem) => {
        let echelonPrefsItem = window.MozXULElement.parseXULToFragment(`
            <menuitem id="menu_echelonOptions" oncommand="launchEchelonOptions();" label="Echelon Options" accesskey="E"/>
        `);
        prefsItem.append(echelonPrefsItem);
    });
	waitForElement("#toolbar-context-menu").then((prefsItem) => {
        let echelonPrefsItem = window.MozXULElement.parseXULToFragment(`
            <menuitem id="menu_echelonOptions" oncommand="launchEchelonOptions();" label="Echelon Options" accesskey="E"/>
        `);
        prefsItem.insertBefore(echelonPrefsItem, document.querySelector(".viewCustomizeToolbar"));
    });
}

