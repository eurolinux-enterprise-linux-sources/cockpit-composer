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
  "language": "it",
  "x-generator": "Zanata 4.6.2"
 },
 "A blueprint name is required.": [
  null,
  ""
 ],
 "Add": [
  null,
  "Aggiungere"
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
  "Architettura"
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
  "Cancella"
 ],
 "Clear All Filters": [
  null,
  ""
 ],
 "Close": [
  null,
  "Chiudi"
 ],
 "Commit": [
  null,
  "Commit"
 ],
 "Commit {commitNumber}": [
  null,
  ""
 ],
 "Complete": [
  null,
  "Completato"
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
  "Componenti"
 ],
 "Contents": [
  null,
  "Sommario"
 ],
 "Copy": [
  null,
  "Copia"
 ],
 "Create": [
  null,
  "Crea"
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
  "Debug"
 ],
 "Default": [
  null,
  "Predefinito"
 ],
 "Delete": [
  null,
  "Elimina"
 ],
 "Delete Blueprint": [
  null,
  ""
 ],
 "Dependencies": [
  null,
  "Dipendenze"
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
  "Descrizione"
 ],
 "Discard Changes": [
  null,
  "Scarta le modifiche"
 ],
 "Download": [
  null,
  "Scarica"
 ],
 "Edit": [
  null,
  "Modifica"
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
  "Errore"
 ],
 "Export": [
  null,
  "Esporta"
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
  "Fallito"
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
  "Va indietro"
 ],
 "Hide Details": [
  null,
  ""
 ],
 "Image Type": [
  null,
  "Tipo di immagine"
 ],
 "Images": [
  null,
  "Immagini"
 ],
 "In Progress": [
  null,
  "In corso"
 ],
 "Install Profile": [
  null,
  ""
 ],
 "Loading": [
  null,
  "Caricamento in corso"
 ],
 "Modify your filter criteria to get results.": [
  null,
  ""
 ],
 "Name": [
  null,
  "Nome"
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
  "Pagina non trovata"
 ],
 "Page not found": [
  null,
  ""
 ],
 "Pending": [
  null,
  "In attesa"
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
  "Rimuovi"
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
  "Mostra tutto"
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
  "Percorso della sorgente"
 ],
 "Sources": [
  null,
  "Sorgente"
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
  "Testo"
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
  "Tipo"
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
  "Aggiorna"
 ],
 "Version": [
  null,
  "Versione"
 ],
 "Version {version}": [
  null,
  ""
 ],
 "View": [
  null,
  "Visualizza"
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
