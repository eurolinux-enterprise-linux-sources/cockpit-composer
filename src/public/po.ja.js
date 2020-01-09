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
  "x-generator": "Zanata 4.6.2",
  "language": "ja"
 },
 "A blueprint name is required.": [
  null,
  "ブループリント名が必要です。"
 ],
 "Add": [
  null,
  "追加"
 ],
 "Add Blueprint Components": [
  null,
  "ブループリントコンポーネントの追加"
 ],
 "Added": [
  null,
  "追加"
 ],
 "An Error Occurred": [
  null,
  "エラーが発生しました"
 ],
 "An error occurred while trying to get blueprint contents.": [
  null,
  "ブループリントのコンテンツの取得中にエラーが発生しました。"
 ],
 "An error occurred while trying to get sources.": [
  null,
  "ソースの取得中にエラーが発生しました。"
 ],
 "Apply Change": [
  null,
  "変更の適用"
 ],
 "Architecture": [
  null,
  "アーキテクチャー"
 ],
 "Are you sure you want to delete the blueprint {name}?": [
  null,
  "ブループリント {name} を削除してもよろしいですか?"
 ],
 "Available Components": [
  null,
  "利用可能なコンポーネント"
 ],
 "Back to Blueprints": [
  null,
  "ブループリントに戻る"
 ],
 "Back to {parent}": [
  null,
  "{parent} に戻る"
 ],
 "Based on Version {version}": [
  null,
  ""
 ],
 "Blueprint": [
  null,
  "ブループリント"
 ],
 "Blueprint Components": [
  null,
  "ブループリントコンポーネント"
 ],
 "Blueprints": [
  null,
  "ブループリント"
 ],
 "Browse or search for components, then add them to the blueprint.": [
  null,
  "コンポーネントを閲覧または検索した後、ブループリントに追加します。"
 ],
 "Cancel": [
  null,
  "キャンセル"
 ],
 "Clear All Filters": [
  null,
  "すべてのフィルターの消去"
 ],
 "Close": [
  null,
  "閉じる"
 ],
 "Commit": [
  null,
  "コミット"
 ],
 "Commit {commitNumber}": [
  null,
  "コミット {commitNumber}"
 ],
 "Complete": [
  null,
  "完了"
 ],
 "Component Details": [
  null,
  "コンポーネントの詳細"
 ],
 "Component Options": [
  null,
  "コンポーネントのオプション"
 ],
 "Components": [
  null,
  "コンポーネント"
 ],
 "Contents": [
  null,
  "コンテンツ"
 ],
 "Copy": [
  null,
  "コピー"
 ],
 "Create": [
  null,
  "作成"
 ],
 "Create Blueprint": [
  null,
  "ブループリントの作成"
 ],
 "Create Image": [
  null,
  "イメージの作成"
 ],
 "Create a blueprint to define the contents that will be included in the images you create. Images can be produced in a variety of output formats.": [
  null,
  "作成するイメージに含まれるコンテンツを定義するためにブループリントを作成します。イメージは、様々な出力フォーマットで作成可能です。"
 ],
 "Custom Sources": [
  null,
  "カスタムソース"
 ],
 "Date Created {date}": [
  null,
  "作成日 {date}"
 ],
 "Debug": [
  null,
  "デバッグ"
 ],
 "Default": [
  null,
  "デフォルト"
 ],
 "Delete": [
  null,
  "削除"
 ],
 "Delete Blueprint": [
  null,
  "ブループリントの削除"
 ],
 "Dependencies": [
  null,
  "依存性"
 ],
 "Dependencies {count}": [
  null,
  "依存性 {count}"
 ],
 "Dependency": [
  null,
  "依存関係"
 ],
 "Description": [
  null,
  "説明"
 ],
 "Discard Changes": [
  null,
  "変更の破棄"
 ],
 "Download": [
  null,
  "ダウンロード"
 ],
 "Edit": [
  null,
  "編集"
 ],
 "Edit Blueprint": [
  null,
  "ブループリントの編集"
 ],
 "Empty Blueprint": [
  null,
  "ブループリントを空にします"
 ],
 "Error": [
  null,
  "エラー"
 ],
 "Export": [
  null,
  "エクスポート"
 ],
 "Export Blueprint": [
  null,
  "ブループリントのエクスポート"
 ],
 "Export as": [
  null,
  "エクスポート形式"
 ],
 "Failed": [
  null,
  "失敗"
 ],
 "Filter Available Components by Name": [
  null,
  "利用可能なコンポーネントの名前での絞り込み"
 ],
 "Filter By Name...": [
  null,
  "名前での絞り込み..."
 ],
 "Go back": [
  null,
  "戻る"
 ],
 "Hide Details": [
  null,
  "詳細非表示"
 ],
 "Image Type": [
  null,
  "イメージタイプ"
 ],
 "Images": [
  null,
  "イメージ"
 ],
 "In Progress": [
  null,
  "処理中"
 ],
 "Install Profile": [
  null,
  "プロファイルのインストール"
 ],
 "Loading": [
  null,
  "読み込み中"
 ],
 "Modify your filter criteria to get results.": [
  null,
  "結果を取得するために絞り込みの基準を修正。"
 ],
 "Name": [
  null,
  "名前"
 ],
 "Name: {name}": [
  null,
  "名前: {name}"
 ],
 "No Blueprints": [
  null,
  "ブループリントなし"
 ],
 "No Images": [
  null,
  "イメージなし"
 ],
 "No Results Match the Filter Criteria": [
  null,
  "絞り込みの基準と一致する結果がありません。"
 ],
 "No images have been created from this blueprint.": [
  null,
  "このブループリントからイメージは作成されていません。"
 ],
 "One or more dependencies have multiple variations that could be used.\n                            A default variation was automatically selected.\n                            Click a flagged dependency to see other options available.": [
  null,
  "1 つ以上の依存性には、使用可能な複数のバリエーションがあります。\n                            デフォルトのバリエーションが自動的に選択されました。\n                            利用可能なその他のオプションを見るには、フラグ付きの依存性をクリックします。"
 ],
 "Oups, something went wrong": [
  null,
  "エラー。問題が発生しました。"
 ],
 "Page Not Found": [
  null,
  "ページが見つかりません"
 ],
 "Page not found": [
  null,
  "ページが見つかりません"
 ],
 "Pending": [
  null,
  "保留中"
 ],
 "Release": [
  null,
  "リリース"
 ],
 "Release {release}": [
  null,
  "リリース {release}"
 ],
 "Remove": [
  null,
  "削除"
 ],
 "Remove from Blueprint": [
  null,
  "ブループリントから削除"
 ],
 "Removed": [
  null,
  "削除済み"
 ],
 "Required information is missing.": [
  null,
  "必須情報が見つかりません。"
 ],
 "Select components": [
  null,
  "コンポーネントの選択"
 ],
 "Selected Components": [
  null,
  "選択されたコンポーネント"
 ],
 "Selected Components {count}": [
  null,
  "選択されたコンポーネント {count}"
 ],
 "Show All": [
  null,
  "すべて表示"
 ],
 "Show Details and More Options": [
  null,
  "詳細とさらなるオプションの表示"
 ],
 "Show Less": [
  null,
  "簡易表示"
 ],
 "Source Path": [
  null,
  "ソースパス"
 ],
 "Sources": [
  null,
  "ソース"
 ],
 "Specify a new blueprint name.": [
  null,
  "新規ブループリント名を指定します。"
 ],
 "System Sources": [
  null,
  "システムソース"
 ],
 "Text": [
  null,
  "テキスト"
 ],
 "The fields marked with {val} are required.": [
  null,
  "{val} の付いたフィールドは必須です。"
 ],
 "The name {name} already exists.": [
  null,
  "名前 {name} はすでに存在します。"
 ],
 "The page you're looking for does not exist or an another error occurred.": [
  null,
  "お探しのページは削除されたか、別のエラーが発生しました。"
 ],
 "There are no components listed in the blueprint. Edit the blueprint to add components.": [
  null,
  "ブループリントにリストされたコンポーネントはありません。ブループリントを編集して、コンポーネントを追加します。"
 ],
 "This action cannot be undone.": [
  null,
  "このアクションは取り消せません。"
 ],
 "Type": [
  null,
  "種類"
 ],
 "Type {type}": [
  null,
  "種類 {type}"
 ],
 "URL": [
  null,
  "URL"
 ],
 "Update": [
  null,
  "更新"
 ],
 "Version": [
  null,
  "バージョン"
 ],
 "Version {version}": [
  null,
  "バージョン {version}"
 ],
 "View": [
  null,
  "表示"
 ],
 "View Sources": [
  null,
  "ソースを表示"
 ],
 "home page": [
  null,
  "ホームページ"
 ],
 "x86_64": [
  null,
  "x86_64"
 ],
 "{blueprint} Blueprint changes are committed.": [
  null,
  "{blueprint} ブループリントの変更がコミットされました。"
 ],
 "{blueprint} Commit failed.": [
  null,
  "{blueprint} コミットに失敗しました。"
 ],
 "{blueprint} Committing blueprint.": [
  null,
  "{blueprint} ブループリントのコミット中。"
 ],
 "{blueprint} Creating image.": [
  null,
  "{blueprint} イメージの作成中"
 ],
 "{blueprint} Image creation is complete.": [
  null,
  "{blueprint} イメージの作成が完了"
 ],
 "{count} total components": [
  null,
  "{count} 総コンポーネント"
 ],
 "{goBack}, or head over to the {homePage} to choose a new direction.": [
  null,
  "{goBack}、または {homePage} へ進み、新しいディレクションを選択します。"
 ],
 "{pendingChanges, plural, one {# Pending Change} other {# Pending Changes}}": [
  null,
  "{pendingChanges, plural, one {# Pending Change} other {# Pending Changes}}"
 ],
 "{selectComponents} in this list to add to the blueprint.": [
  null,
  "このリストで {selectComponents} し、ブループリントに追加します。"
 ],
 "Image Builder": [
  null,
  "イメージビルダー"
 ]
}));
