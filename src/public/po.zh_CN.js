/* eslint-disable */
(function (root, data) {
    var loaded, module;

    /* Load into AMD if desired */
    if (typeof define === 'function' && define.amd) {
        define(data);
        loaded = true;
    }

    /* Load into Cockpit locale */
    if (typeof cockpit === 'object') {
        cockpit.locale(data)
        loaded = true;
    }

    function transformAngular(data, prev) {
        var key, context, parts, value, result = { };
        for (key in data) {
            if (key === "")
                continue;
            parts = key.split("\u0004");
            value = data[key];
            if (parts[1]) {
                context = parts[0];
                key = parts[1];
            } else {
                context = "$$noContext";
                key = parts[0];
            }
            if (value[0] === null)
                value = value[1];
            else
                value = value.slice(1);
            if (!(key in result))
                result[key] = { };
            result[key][context] = value;
        }
        return angular.extend(prev, result);
    }

    /* Load into angular here */
    if (typeof angular === 'object') {
        try {
            module = angular.module(["gettext"]);
        } catch(ex) { console.log(ex); /* Either no angular or angular-gettext */ };
        if (module) {
            loaded = true;
            module.run(['gettextCatalog', function(gettextCatalog) {
                var lang = data[""]["language"];
                var prev = (gettextCatalog.getCurrentLanguage() == lang) ? gettextCatalog.strings : { };
                gettextCatalog.setStrings(lang, transformAngular(data, prev));
                gettextCatalog.setCurrentLanguage(lang);
            }]);
        }
    }

    if (!loaded)
        root.po = data;

/* The syntax of this line is important  by po2json */
}(this, {
 "": {'plural-forms':function(n) {
var nplurals, plural;
nplurals=1; plural=0;
return plural;
},
  "language": "zh_CN",
  "x-generator": "Zanata 4.6.2"
 },
 "A blueprint name is required.": [
  null,
  ""
 ],
 "Add": [
  null,
  "添加"
 ],
 "Add Blueprint Components": [
  null,
  ""
 ],
 "Added": [
  null,
  "已添加的"
 ],
 "An Error Occurred": [
  null,
  ""
 ],
 "An error occurred while trying to get blueprint contents.": [
  null,
  ""
 ],
 "An error occurred while trying to get sources.": [
  null,
  ""
 ],
 "Apply Change": [
  null,
  ""
 ],
 "Architecture": [
  null,
  "架构"
 ],
 "Are you sure you want to delete the blueprint {name}?": [
  null,
  ""
 ],
 "Available Components": [
  null,
  ""
 ],
 "Back to Blueprints": [
  null,
  ""
 ],
 "Back to {parent}": [
  null,
  ""
 ],
 "Based on Version {version}": [
  null,
  ""
 ],
 "Blueprint": [
  null,
  "蓝图"
 ],
 "Blueprint Components": [
  null,
  ""
 ],
 "Blueprints": [
  null,
  "Blueprints"
 ],
 "Browse or search for components, then add them to the blueprint.": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "取消"
 ],
 "Clear All Filters": [
  null,
  ""
 ],
 "Close": [
  null,
  "关闭"
 ],
 "Commit": [
  null,
  "提交"
 ],
 "Commit {commitNumber}": [
  null,
  ""
 ],
 "Complete": [
  null,
  "完成"
 ],
 "Component Details": [
  null,
  ""
 ],
 "Component Options": [
  null,
  ""
 ],
 "Components": [
  null,
  "组件"
 ],
 "Contents": [
  null,
  "内容"
 ],
 "Copy": [
  null,
  "复制"
 ],
 "Create": [
  null,
  "创建"
 ],
 "Create Blueprint": [
  null,
  ""
 ],
 "Create Image": [
  null,
  "创建映像"
 ],
 "Create a blueprint to define the contents that will be included in the images you create. Images can be produced in a variety of output formats.": [
  null,
  ""
 ],
 "Custom Sources": [
  null,
  ""
 ],
 "Date Created {date}": [
  null,
  ""
 ],
 "Debug": [
  null,
  "调试"
 ],
 "Default": [
  null,
  "默认"
 ],
 "Delete": [
  null,
  "删除"
 ],
 "Delete Blueprint": [
  null,
  ""
 ],
 "Dependencies": [
  null,
  "相依性"
 ],
 "Dependencies {count}": [
  null,
  ""
 ],
 "Dependency": [
  null,
  "相依性"
 ],
 "Description": [
  null,
  "描述"
 ],
 "Discard Changes": [
  null,
  "放弃更改"
 ],
 "Download": [
  null,
  "下载"
 ],
 "Edit": [
  null,
  "编辑"
 ],
 "Edit Blueprint": [
  null,
  "编辑蓝图"
 ],
 "Empty Blueprint": [
  null,
  ""
 ],
 "Error": [
  null,
  "错误"
 ],
 "Export": [
  null,
  "导出"
 ],
 "Export Blueprint": [
  null,
  ""
 ],
 "Export as": [
  null,
  ""
 ],
 "Failed": [
  null,
  "已失败"
 ],
 "Filter Available Components by Name": [
  null,
  ""
 ],
 "Filter By Name...": [
  null,
  ""
 ],
 "Go back": [
  null,
  "回退"
 ],
 "Hide Details": [
  null,
  "隐藏详情"
 ],
 "Image Type": [
  null,
  "镜像类型"
 ],
 "Images": [
  null,
  "镜像"
 ],
 "In Progress": [
  null,
  "进行中"
 ],
 "Install Profile": [
  null,
  ""
 ],
 "Loading": [
  null,
  "载入"
 ],
 "Modify your filter criteria to get results.": [
  null,
  ""
 ],
 "Name": [
  null,
  "名称"
 ],
 "Name: {name}": [
  null,
  ""
 ],
 "No Blueprints": [
  null,
  ""
 ],
 "No Images": [
  null,
  ""
 ],
 "No Results Match the Filter Criteria": [
  null,
  ""
 ],
 "No images have been created from this blueprint.": [
  null,
  ""
 ],
 "One or more dependencies have multiple variations that could be used.\n                            A default variation was automatically selected.\n                            Click a flagged dependency to see other options available.": [
  null,
  ""
 ],
 "Oups, something went wrong": [
  null,
  ""
 ],
 "Page Not Found": [
  null,
  "没有找到页"
 ],
 "Page not found": [
  null,
  ""
 ],
 "Pending": [
  null,
  "待发布"
 ],
 "Release": [
  null,
  "释放"
 ],
 "Release {release}": [
  null,
  ""
 ],
 "Remove": [
  null,
  "移除"
 ],
 "Remove from Blueprint": [
  null,
  ""
 ],
 "Removed": [
  null,
  "已删除的（Removed）"
 ],
 "Required information is missing.": [
  null,
  ""
 ],
 "Select components": [
  null,
  ""
 ],
 "Selected Components": [
  null,
  ""
 ],
 "Selected Components {count}": [
  null,
  ""
 ],
 "Show All": [
  null,
  "显示全部"
 ],
 "Show Details and More Options": [
  null,
  ""
 ],
 "Show Less": [
  null,
  ""
 ],
 "Source Path": [
  null,
  "源路径"
 ],
 "Sources": [
  null,
  "来源"
 ],
 "Specify a new blueprint name.": [
  null,
  ""
 ],
 "System Sources": [
  null,
  ""
 ],
 "Text": [
  null,
  "文本"
 ],
 "The fields marked with {val} are required.": [
  null,
  ""
 ],
 "The name {name} already exists.": [
  null,
  ""
 ],
 "The page you're looking for does not exist or an another error occurred.": [
  null,
  ""
 ],
 "There are no components listed in the blueprint. Edit the blueprint to add components.": [
  null,
  ""
 ],
 "This action cannot be undone.": [
  null,
  ""
 ],
 "Type": [
  null,
  "类型"
 ],
 "Type {type}": [
  null,
  ""
 ],
 "URL": [
  null,
  "网址"
 ],
 "Update": [
  null,
  "更新"
 ],
 "Version": [
  null,
  "版本"
 ],
 "Version {version}": [
  null,
  ""
 ],
 "View": [
  null,
  "查看"
 ],
 "View Sources": [
  null,
  ""
 ],
 "home page": [
  null,
  ""
 ],
 "x86_64": [
  null,
  "x86_64"
 ],
 "{blueprint} Blueprint changes are committed.": [
  null,
  ""
 ],
 "{blueprint} Commit failed.": [
  null,
  ""
 ],
 "{blueprint} Committing blueprint.": [
  null,
  ""
 ],
 "{blueprint} Creating image.": [
  null,
  ""
 ],
 "{blueprint} Image creation is complete.": [
  null,
  ""
 ],
 "{count} total components": [
  null,
  ""
 ],
 "{goBack}, or head over to the {homePage} to choose a new direction.": [
  null,
  ""
 ],
 "{pendingChanges, plural, one {# Pending Change} other {# Pending Changes}}": [
  null,
  ""
 ],
 "{selectComponents} in this list to add to the blueprint.": [
  null,
  ""
 ],
 "Image Builder": [
  null,
  ""
 ]
}));
