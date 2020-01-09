Name:           cockpit-composer
Version:        0.1.4
Release:        1%{?dist}
Summary:        Composer GUI for use with Cockpit

License:        MIT
URL:            http://weldr.io/
Source0:        welder-web-%{version}.tar.gz

BuildArch:      noarch

Requires:       cockpit
Requires:       lorax-composer

%description
Composer GUI for Cockpit and lorax-composer

%prep
%setup -q -n welder-web-%{version}

%build
# Nothing to build

%install
mkdir -p %{buildroot}/%{_datadir}/cockpit/welder
cp -r public/* %{buildroot}/%{_datadir}/cockpit/welder

%files
%doc README.md
%license LICENSE.txt
%{_datadir}/cockpit/welder

%changelog
* Tue Sep 04 2018 Brian C. Lane <bcl@redhat.com> - 0.1.4-1
- New version 0.1.4
- Adds queue status to an infotip in the Create Image modal (jgiardin)
- Update Create Image modal to also commit unsaved changes (jgiardin)
- Catching a couple of minor issues (jgiardin)
- Update Create Image modal to include blueprint object instead of just name (jgiardin)
- Update Create Image button selector in end-to-end test (jgiardin)
- Display warning messages to the user in Create Image modal (jgiardin)
- use updated property key from api for date created (jgiardin)
- translations: Fail when zanata-js is not installed (lars)
- README.md: Add missing `translations:` (lars)
- translations: remove test target (lars)
- po: Update from Fedora Zanata (lars)
- translations: move po files and scripts to po/ (lars)
- translations: Strip country code when loading react-intl's locale-data (mpitt)
- remove redundant .then(data => data) (jgiardin)
- Add ability to stop builds that are waiting or running (jgiardin)
- Change text from "Delete Build" to "Delete Image" (jgiardin)
- Update Delete Blueprint modal to match layout of Delete Build (jgiardin)
- Fix miscellaneous propType warnings (jgiardin)
- Include confirmation modal for deleting a finished build (jgiardin)
- Swap order of date and type in the Image list item details (jgiardin)
- Add Delete action for Finished composes (jgiardin)
- Add ability to delete Failed builds (jgiardin)
- test_blueprints: Make blueprint selection more robust (lars)
- Use upstream patternfly-react's Tab component (lars)
- Changes en-dash to dash and adds spaces (jgiardin)
- Updates based on a11y review, also simplified i18n format (jgiardin)
- minor tweaks to improve the screen reader experience (jgiardin)
- Makes strings translatable in pagination for available components (jgiardin)
- Update React and enzyme (lars)
- package.json: Use ~ instead of ^ versions for dependencies (lars)
- Drop unused dependencies (lars)
- package.json: update dependencies (lars)
- Remove package-lock.json (lars)

* Wed Aug 29 2018 Brian C. Lane <bcl@redhat.com> - 0.1.3-1
- New version 0.1.3
- Update Create Image notifications (#328) (jgiardin)
- Make strings translatable in Pending Changes dialog (#341) (jgiardin)
- Makefile: don't run po-pull on dist (lars)
- Add the .spec files to .PHONY (bcl)

* Fri Aug 10 2018 Brian C. Lane <bcl@redhat.com> - 0.1.2-1
- New Version 0.1.2
- Add the .spec files to .PHONY (bcl)
- Add welder-web and cockpit-composer release instructions (bcl)
- Add a 'tag' target to the Makefile (bcl)
- Adjust image list layout to improve alignment (jgiardin)
- Fix blueprint packages getting added to history (jacobdkozol)
- Fixed bug where startComposeApi would not return start compose response (sfondell)
- Run `make po-push` from travis on pushes to master. (dshea)
- Add a po-push target to the Makefile. (dshea)
- Don't call compose API on the blueprints page (lars)
- Support downloading images (lars)
- Fix fetchComposes() call (lars)
- Update text string (jgiardin)
- add bootstrap class for large modals (jgiardin)
- Fix issues with translated strings and add one more for "Close" (jgiardin)
- Make strings translatable (but includes build error) (jgiardin)
- Update layout (jgiardin)
- Don't show custom sources section if empty (jgiardin)
- Add modal for listing sources (jgiardin)
- Revert "Revert "Add python and gcc to the Dockerfiles."" (dshea)
- Include translations in the dist tarball (dshea)
- Remove the zanata-js crud from package-lock.json (dshea)
- Fix how fetching blueprints/composes is triggered (jacobdkozol)
- Update API calls error messages (jacobdkozol)
- Fix polling issue. Add error action. (jacobdkozol)
- Add loading images from prior sessions and sort by start time. (jacobdkozol)
- Revert "Run `npm rebuild` after `npm install`." (lars)
- Revert "Add python and gcc to the Dockerfiles." (lars)
- Don't update translations on every build (lars)
- Fix yamllint errors on .travis.yml (dshea)
- Add new requirements to the travis environment (dshea)
- Add a script for testing translations. (dshea)
- Run `npm rebuild` after `npm install`. (dshea)
- Make the editBlueprint selector more specific. (dshea)
- Add python and gcc to the Dockerfiles. (dshea)
- Add a i18n section to the README (dshea)
- Create cockpit translation modules. (dshea)
- Extract cockpit manifest strings for translation. (dshea)
- Add translated messages. (dshea)
- Add scripts for interacting with Zanata. (dshea)
- Internationalize strings with react-intl. (dshea)
- Fix PR#309 imported issue. The rpm package should be welder-web*.noarch.rpm, not welder-web*.x86_64.rpm (henrywangxf)
- Build srpm together with rpm (atodorov)
- Images list UI refinements (jgiardin)
- cockpituous-release: Use upstream release-source (martinpitt)
- core: Use escalated privileges to access Lorax API (stefw)
- remove utils from Layout (jgiardin)
- Remove unused Layout components (jgiardin)
- Submit coverage report only if present (atodorov)
- Use default composer dir without --group option (atodorov)
- Fix created image not being added to state (jacobdkozol)
- package.json: Remove bootstrap-select (lars)
- package.json: Update stylelint (lars)
- blueprints: Show actual error message (lars)
- core: propagate errors from cockpitFetch() (lars)

* Tue Jul 10 2018 Brian C. Lane <bcl@redhat.com> - 0.1.1-1
- fixes blueprints end-to-end test (jgiardin)
- Hides Comment feature from Pending Changes modal (jgiardin)
- Remove non-functional UI elements/components (jgiardin)
- fixes line length in unit test (jgiardin)
- update selector for Edit Blueprint button in test (jgiardin)
- fixes empty state on blueprints page and tests (jgiardin)
- fixes spacing errors (jgiardin)
- fixes bad merges during rebase (jgiardin)
- handles error case for fetching blueprints (jgiardin)
- sets timeout on Loading state (jgiardin)
- how did that 'n' get in there? (jgiardin)
- fixes line length (jgiardin)
- Disables actions (jgiardin)
- Updates UI based on state, for loading and error (jgiardin)
- Adds reducer for updating state when an error occurs (jgiardin)
- updates state to hold values for fetch status (jgiardin)
- components: Use consistent syntax for handlers (lars)
- Fix two issues. (henrywangxf)
- test/create.image: simplify shallow wrapper creation (lars)
- CreateImage: don't call unset handlers (lars)
- test/create.image: also conider handleStartCompose (lars)
- correcting the initial state (jgiardin)
- updates mockState in unit tests to match state updates for Filters (jgiardin)
- Merge pull request #250 from larskarlitski/remove-mock-data (jgiardin)
- Remove mock data (lars)
- Add lorax-composer test and remove stand alone welder-web test. (henrywangxf)
- Domain socket support in UI testing. (henrywangxf)
- Update queue status text, Remove cancel button (jacobdkozol)
- Added status icons for imageListView (jacobdkozol)
- Add start compose functionality (jacobdkozol)
- Fix blueprint page issue loading components (jacobdkozol)
- Remove redux persist (jacobdkozol)
- Remove unused code (lars)
- Merge pull request #248 from jgiardino/filter (jgiardin)
- Merge pull request #262 from andreasn/form-control-fx-style (jgiardin)
- Fix style of pagination input under available components (anilsson)
- fix issue when multiple filters are defined (jgiardin)
- implements filtering and refactors toolbars (jgiardin)

* Thu Jun 21 2018 Brian C. Lane <bcl@redhat.com> - 0.1.0-1
- Switched to using /run/weldr/api.socket for communication with lorax-composer
