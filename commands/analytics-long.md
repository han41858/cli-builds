<!-->
The value of *settingOrProject* is one of the following.
* "on" : Enables analytics gathering and reporting for the user.
* "off" : Disables analytics gathering and reporting for the user.
* "ci" : Enables analytics and configures reporting for use with Continuous Integration,
which uses a common CI user.
* "prompt" : Prompts the user to set the status interactively.
* "project" : Sets the default status for the project to the *projectSetting* value, which can be any of the other values. The *projectSetting* argument is ignored for all other values of *settingOrProject*.
-->
*settingOrProject* 값은 다음 중 하나를 사용하면 됩니다.

* "on" : 해당 사용자의 사용통계를 수집합니다.
* "off" : 해당 사용자의 사용통계 수집을 중단합니다.
* "ci" : CI 사용자용 사용통계 수집 기능을 활성화합니다.
* "prompt" : 설정값을 어떻게 지정할지 프롬프트로 진행합니다.
* "project" : 프로젝트 기본값 *projectSetting* 값으로 활성화 여부를 지정합니다. *settingOrProject* 값에 사용할 수 있는 항목이 아니라면 무시됩니다.
