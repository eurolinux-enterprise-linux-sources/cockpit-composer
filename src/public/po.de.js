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
nplurals=2; plural=(n != 1);
return plural;
},
  "language": "de",
  "x-generator": "Zanata 4.6.2"
 },
 "A blueprint name is required.": [
  null,
  ""
 ],
 "Add": [
  null,
  "Hinzufügen"
 ],
 "Add Blueprint Components": [
  null,
  ""
 ],
 "Added": [
  null,
  "Hinzugefügt"
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
  "Architektur"
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
  "Abbrechen"
 ],
 "Clear All Filters": [
  null,
  ""
 ],
 "Close": [
  null,
  "Schließen"
 ],
 "Commit": [
  null,
  "Festschreiben"
 ],
 "Commit {commitNumber}": [
  null,
  ""
 ],
 "Complete": [
  null,
  "Abgeschlossen"
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
  "Komponenten"
 ],
 "Contents": [
  null,
  "Inhalt"
 ],
 "Copy": [
  null,
  "Kopieren"
 ],
 "Create": [
  null,
  "Erstellen"
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
  "Fehlerdiagnose"
 ],
 "Default": [
  null,
  "Standard"
 ],
 "Delete": [
  null,
  "Löschen"
 ],
 "Delete Blueprint": [
  null,
  ""
 ],
 "Dependencies": [
  null,
  "Abhängigkeiten (\"Dependencies\")"
 ],
 "Dependencies {count}": [
  null,
  ""
 ],
 "Dependency": [
  null,
  "Abhängigkeit"
 ],
 "Description": [
  null,
  "Beschreibung"
 ],
 "Discard Changes": [
  null,
  "Änderungen verwerfen"
 ],
 "Download": [
  null,
  "Herunterladen"
 ],
 "Edit": [
  null,
  "Bearbeiten"
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
  "Fehler"
 ],
 "Export": [
  null,
  "Exportieren"
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
  "Fehlgeschlagen"
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
  "Zurück"
 ],
 "Hide Details": [
  null,
  "Details verbergen"
 ],
 "Image Type": [
  null,
  "Bildtyp"
 ],
 "Images": [
  null,
  "Abbilder"
 ],
 "In Progress": [
  null,
  "In Arbeit"
 ],
 "Install Profile": [
  null,
  ""
 ],
 "Loading": [
  null,
  "Wird geladen"
 ],
 "Modify your filter criteria to get results.": [
  null,
  ""
 ],
 "Name": [
  null,
  "Name"
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
  "Seite nicht gefunden"
 ],
 "Page not found": [
  null,
  ""
 ],
 "Pending": [
  null,
  "Ausstehend"
 ],
 "Release": [
  null,
  "Release"
 ],
 "Release {release}": [
  null,
  ""
 ],
 "Remove": [
  null,
  "Entfernen"
 ],
 "Remove from Blueprint": [
  null,
  ""
 ],
 "Removed": [
  null,
  "Entfernt"
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
  "Alle anzeigen"
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
  "Quellpfad"
 ],
 "Sources": [
  null,
  "Quellen"
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
  "Text"
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
  "Typ"
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
  "Aktualisierung"
 ],
 "Version": [
  null,
  "Version"
 ],
 "Version {version}": [
  null,
  ""
 ],
 "View": [
  null,
  "Anzeigen"
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
