<!--
The command takes an optional project name, as specified in the `projects` section of the `angular.json` workspace configuration file.
When a project name is not supplied, executes the `deploy` builder for the default project.

To use the `ng deploy` command, use `ng add` to add a package that implements deployment capabilities to your favorite platform.
Adding the package automatically updates your workspace configuration, adding a deployment
[CLI builder](guide/cli-builder).
For example:

```json
"projects": {
  "my-project": {
    ...
    "architect": {
      ...
      "deploy": {
        "builder": "@angular/fire:deploy",
        "options": {}
      }
    }
  }
}
 ```
-->
명령을 실행하면서 워크스페이스 환경설정 파일 `angular.json`의 `projects` 섹션에 구성된 프로젝트 이름을 옵션으로 지정할 수 있습니다.
프로젝트 이름을 지정하지 않으면 기본 프로젝트를 대상으로 `deploy` 빌더가 실행됩니다.

`ng deploy` 명령을 실행하려면 `ng add` 명령을 실행해서 원하는 플랫폼에 해당하는 배포 패키지를 설치해야 합니다.
이런 패키지를 설치하면 배포용 [CLI 빌더](guide/cli-builder)가 추가되면서 워크스페이스 환경설정이 자동으로 갱신됩니다.
이렇게 등록됩니다:

```json
"projects": {
  "my-project": {
    ...
    "architect": {
      ...
      "deploy": {
        "builder": "@angular/fire:deploy",
        "options": {}
      }
    }
  }
}
 ```