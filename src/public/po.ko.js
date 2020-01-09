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
  "language": "ko",
  "x-generator": "Zanata 4.6.2"
 },
 "A blueprint name is required.": [
  null,
  ""
 ],
 "Add": [
  null,
  "추가"
 ],
 "Add Blueprint Components": [
  null,
  ""
 ],
 "Added": [
  null,
  ""
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
  "아키텍처"
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
  ""
 ],
 "Blueprint Components": [
  null,
  ""
 ],
 "Blueprints": [
  null,
  ""
 ],
 "Browse or search for components, then add them to the blueprint.": [
  null,
  ""
 ],
 "Cancel": [
  null,
  "취소 "
 ],
 "Clear All Filters": [
  null,
  ""
 ],
 "Close": [
  null,
  "닫기"
 ],
 "Commit": [
  null,
  "커밋 "
 ],
 "Commit {commitNumber}": [
  null,
  ""
 ],
 "Complete": [
  null,
  "완료"
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
  "구성 요소"
 ],
 "Contents": [
  null,
  "차례"
 ],
 "Copy": [
  null,
  "복사"
 ],
 "Create": [
  null,
  "생성 "
 ],
 "Create Blueprint": [
  null,
  ""
 ],
 "Create Image": [
  null,
  ""
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
  "디버그 "
 ],
 "Default": [
  null,
  "디폴트 "
 ],
 "Delete": [
  null,
  "삭제 "
 ],
 "Delete Blueprint": [
  null,
  ""
 ],
 "Dependencies": [
  null,
  "종속성 "
 ],
 "Dependencies {count}": [
  null,
  ""
 ],
 "Dependency": [
  null,
  ""
 ],
 "Description": [
  null,
  "설명 "
 ],
 "Discard Changes": [
  null,
  "변경 사항 취소"
 ],
 "Download": [
  null,
  "다운로드 "
 ],
 "Edit": [
  null,
  "편집"
 ],
 "Edit Blueprint": [
  null,
  ""
 ],
 "Empty Blueprint": [
  null,
  ""
 ],
 "Error": [
  null,
  "오류 "
 ],
 "Export": [
  null,
  "내보내기 "
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
  "실패하였습니다"
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
  "뒤로 이동"
 ],
 "Hide Details": [
  null,
  ""
 ],
 "Image Type": [
  null,
  "그림 형식"
 ],
 "Images": [
  null,
  "이미지 "
 ],
 "In Progress": [
  null,
  "진행 중 "
 ],
 "Install Profile": [
  null,
  ""
 ],
 "Loading": [
  null,
  "로딩 중 "
 ],
 "Modify your filter criteria to get results.": [
  null,
  ""
 ],
 "Name": [
  null,
  "이름"
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
  "페이지를 찾을 수 없음"
 ],
 "Page not found": [
  null,
  ""
 ],
 "Pending": [
  null,
  "보류 중 "
 ],
 "Release": [
  null,
  "릴리즈 "
 ],
 "Release {release}": [
  null,
  ""
 ],
 "Remove": [
  null,
  "삭제"
 ],
 "Remove from Blueprint": [
  null,
  ""
 ],
 "Removed": [
  null,
  ""
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
  "모두 표시"
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
  "소스 경로 "
 ],
 "Sources": [
  null,
  "소스 "
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
  "글자"
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
  "유형 "
 ],
 "Type {type}": [
  null,
  ""
 ],
 "URL": [
  null,
  "URL"
 ],
 "Update": [
  null,
  "업데이트"
 ],
 "Version": [
  null,
  "버전"
 ],
 "Version {version}": [
  null,
  ""
 ],
 "View": [
  null,
  "보기 "
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
