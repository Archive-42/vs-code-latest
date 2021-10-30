var READTHEDOCS_DATA = {
  project: "vscode",
  theme: "readthedocs",
  version: "latest",
  source_suffix: ".md",
  api_host: "https://readthedocs.org",
  language: "en",
  commit: "39eb86fb4054b6fa33a0f80cbbb9d4bd82514a5d",
  docroot:
    "/home/docs/checkouts/readthedocs.org/user_builds/vscode/checkouts/latest/docs",
  builder: "mkdocs",
  page: null,
};

// Old variables
var doc_version = "latest";
var doc_slug = "vscode";
var page_name = "None";
var html_theme = "readthedocs";

READTHEDOCS_DATA["page"] = mkdocs_page_input_path.substr(
  0,
  mkdocs_page_input_path.lastIndexOf(READTHEDOCS_DATA.source_suffix)
);
