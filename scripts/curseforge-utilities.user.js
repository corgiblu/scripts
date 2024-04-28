// ==UserScript==
// @name         Curseforge Utilities
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  try to take over the world!
// @author       CorgiBlu
// @match        https://legacy.curseforge.com/minecraft/mc-mods/*
// @match        http://legacy.curseforge.com/minecraft/mc-mods/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=curseforge.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    // jQuery alias
    var jq = jQuery.noConflict();
    // jQuery queries
    var navFiles = jq("li[id='nav-files']");
    var navRelations = jq("li[id='nav-relations']");
    var relationsLabel = jq("span[class='b-list-label']");
    // string consts and vars
    const listItem = "<li id=\"nav-";
    const fileId = "all-files";
    const depId = "dependents";
    const listFormatting = "\" class=\" b-list-item p-nav-item px-2 pb-1/10 -mb-1/10 text-gray-500\"><a href=\"/minecraft/mc-mods/";
    var slug;
    const fileUrlSuffix = "/files/all";
    const depUrlSuffix = "/relations/dependents";
    const moreFormatting = "\" class=\"text-gray-500 hover:no-underline\"><span class=\"b-list-label\">";
    const fileTitle = "All Files";
    const depTitle = "Dependents";
    const closing = "</span></a></li>";
    // get slug
    let path = window.location.pathname;
    var urlSegments = path.split("/");
    slug = urlSegments[3];
    // add nav buttons
    jq(navFiles).after(listItem + fileId + listFormatting + slug + fileUrlSuffix + moreFormatting + fileTitle + closing);
    jq(navRelations).after(listItem + depId + listFormatting + slug + depUrlSuffix + moreFormatting + depTitle + closing);
    // change 'relations' nav button
    for (let i = 0; i < jq(relationsLabel).length; i++) {
        var label = jq(relationsLabel)[i];
        if (label.innerText == "Relations") {
            label.innerText = "Dependencies";
        }
    }
})();