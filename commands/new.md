<!--
Creates and initializes a new Angular application that is the default project for a new workspace.

Provides interactive prompts for optional configuration, such as adding routing support.
All prompts can safely be allowed to default.

* The new workspace folder is given the specified project name, and contains configuration files at the top level.

* By default, the files for a new initial application (with the same name as the workspace) are placed in the `src/` subfolder. Corresponding end-to-end tests are placed in the `e2e/` subfolder.

* The new application's configuration appears in the `projects` section of the `angular.json` workspace configuration file, under its project name.

* Subsequent applications that you generate in the workspace reside in the `projects/` subfolder.

If you plan to have multiple applications in the workspace, you can create an empty workspace by setting the `--createApplication` option to false.
You can then use `ng generate application` to create an initial application.
This allows a workspace name different from the initial app name, and ensures that all applications reside in the `/projects` subfolder, matching the structure of the configuration file.
-->
워크스페이스를 생성하고 이 워크스페이스의 기본 프로젝트로 Angular 애플리케이션을 생성합니다.

이 명령을 실행하면 라우팅 기능을 추가할지 등에 대한 추가 환경설정이 프롬프트로 진행됩니다.
모든 항목에 기본값을 사용해도 됩니다.

* 새로 생성되는 워크스페이스 폴더 이름은 프로젝트 이름과 같고, 워크스페이스 최상위 폴더에 환경설정 파일이 생성됩니다.

* 함께 생성되는 기본 애플리케이션은 워크스페이스 이름과 같으며, 워크스페이스 폴더 아래 `src/` 폴더에 생성됩니다. 이 애플리케이션의 엔드-투-엔드 테스트 파일은 `e2e/` 폴더에 생성됩니다.

* 새로 생성되는 애플리케이션의 환경설정은 워크스페이스 환경설정 파일 `angular.json` 파일의 `projects` 섹션에 구성됩니다.

* 이 워크스페이스에서 추가로 생성하는 애플리케이션은 `projects/` 폴더에 생성됩니다.

한 워크스페이스에 애플리케이션을 여러개 만들려고 한다면 `--createApplication` 옵션을 `false`로 지정해서 빈 워크스페이스를 생성하면 됩니다.
그 다음에 워크스페이스 안에서 `ng generate application` 명령을 실행하면 첫번째 애플리케이션의 기본 코드가 생성됩니다.
이 방법을 활용하면 기본 애플리케이션의 이름을 워크스페이스 이름과 다르게 생성할 수 있으며, 환경설정 파일의 구조와 동일하게 모든 애플리케이션 코드를 `/projects` 폴더 안에 둘 수 있습니다.