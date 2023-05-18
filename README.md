<h1 align="center">
  <br>
  <img width="150" src="https://avatars.githubusercontent.com/u/23531986?v=4">
  <br>
  Doubtful Kasm Workspaces Registry
  <br>
</h1>

<p align="center">This repository is a template you can use to create your own registry that will work with Kasm Workspaces. A front end website is automatically generated for you and will look similar to the one below.</p>


### Checking it works

![install-registry-800](https://user-images.githubusercontent.com/5698566/230379178-4b2a08c7-3ae1-4000-88a0-ae4b8ab17892.gif)

> **Note**
> If you copy the url from the address bar instead of clicking the button, be sure to remove the branch version from the URL when adding to workspaces, otherwise it wont work.

1. Click on the **Workspace Registry Link** button, this will put the correct url in your clipboard.
2. Go to your Kasm Workspaces instance.
3. Navigate to the Workspaces Registry (Admin / Workspaces / Click on the **Workspaces Registry** button).
4. Click on **Add new** in the registries list.
5. Paste the URL into the text box and click **Add Registry**
6. Click on the mini icon under the registry name to filter by your registries workspaces

&nbsp;

## 5. Creating workspaces

Once you are ready to upload your workspaces, head back to the **Code** tab. You can either continue using the online editor or you might find it easier to clone the repository and work on a local copy, it's up to you. For this example we will continue with the online editor.

### Folder structure

![workspaces-800](https://user-images.githubusercontent.com/5698566/230384525-d8577582-fab7-4850-979d-d75e83503022.gif)

All workspaces reside in the **workspaces** folder

You will need to create a folder and the necessary files using the following format:

```
Workspace Name
- workspace.json
- workspace-name.png
```

![add-workspace-800](https://user-images.githubusercontent.com/5698566/230386427-c2221647-ce30-4c2e-bc92-e83481d1b8ba.gif)

**Folder name** - The folder name can be whatever it needs to be. You probably want to stay clear of special characters to be on the safe side, but spaces should be fine.

**workspace.json** - This is a JSON file with all the parameters you want to be sent to Kasm Workspaces when it builds the container. You can see the valid paramaters in the schema section and whether they are required or not.

```
{
  "description": "Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.",
  "docker_registry": "https://index.docker.io/v1/",
  "name": "kasmweb/vs-code:develop",
  "image_src": "vs-code.png",
  "categories": [
    "Development"
  ],
  "friendly_name": "Visual Studio Code",
  "architecture": [
    "amd64",
    "arm64"
  ],
  "compatibility": [
    "1.13.x"
  ],
  "uncompressed_size_mb": 2170
}
```

**Image file** - The image can be `.png` or `.svg` and ideally will be square and at least 50 x 50px. If you use the workspace builder on your registry store front it will try to normalise everything to make it simpler.

Don't forget to commit your changes!

### Schema

**Version** 1.0

| Property              | Required | Type | Description |
| --------------------- | -------- | --- | --- |
| friendly_name         | True     | String | The name to show                                                                                     |
| name                  | True     | String | The docker image to use                                                                              |
| description           | True     | String | A short description of the workspace                                                                 |
| image_src             | True     | String | The name of the workspace icon used                                                                  |
| architecture          | True     | Array | Json list containing either "amd64", "arm64" or both                                                 |
| compatability         | True     | Array | A list of Kasm versions the workspace should work with                                               |
| uncompressed_size_mb  | True     | Integer | Integer of the approximate size of the workspace when it's uncompressed in MB. This doesn't take into account layers.  For example if an image is 2.46GB you would enter 2460 |
| categories            | False    | Array | Json list containing the categories the workspace belongs too. This should be limited to a max of 3. |
| docker_registry       | False    | String | Which docker registry to use                                                                         |
| run_config            | False    | Object | Any additional parameters to add to the run config                                                   |
| exec_config           | False    | Object | Any additional parameters to add to the exec config                                                  |
| notes                 | False    | String | Notes about running the workspace, such as if it requires libseccomp.                                |
| cores                 | False    | Integer | Specify the amount of cores to use for this workspace                                                |
| memory                | False    | Integer | Specify the amount of memory to use for this workspace                                               |
| gpu_count             | False    | Integer | Specify the amount of GPUs to use for this workspace                                                 |
| cpu_allocation_method | False    | String | What CPU allocation method to use for this workspace. Can be either "Inherit", "Quotas" or "Shares"  |

Head to the **Actions** tab to check your progress and once `Page build and deployment` is complete, your site should be ready.


### New schema version

When a new schema version comes out, you just need to create a new branch that refrlects the new schema, for example `1.1` and make it the default branch.

In the new branch, make any updates that are needed, when the changes are committed a new version will be built.

Kasm Workspaces will automatically pull the version of the schema that it understands.

&nbsp;

## 6. Discovery

The tag below will hopefully make it easier for people to find your Workspace Registry by clicking on [this github search link](https://github.com/search?q=in%3Areadme+sort%3Aupdated+-user%3Akasmtech+%22KASM-REGISTRY-DISCOVERY-IDENTIFIER%22&type=repositories). If you want to make it harder to find your repository for some reason, just remove this section.

If you are the one doing the searching, click on the **site** folder, then click on **next.config.js** and the url can be found under **env.listUrl**

![search-600](https://user-images.githubusercontent.com/5698566/230614274-2976b4d7-074f-4e6d-9e58-e4d2512a3d2a.gif)

KASM-REGISTRY-DISCOVERY-IDENTIFIER
