const core = require("@actions/core");
const github = require("@actions/github");
const { Octokit } = require("@octokit/action");

try {
  const octokit = new Octokit();
  const [owner, repo] = process.env.GITHUB_REPOSITORY.split("/");
  // octokit.rest.issues.list();
  console.log("owner", owner);
  console.log("repo", repo);

  const branchName = core.getInput("branch-name");
  console.log(`ブランチ名は ${branchName}`);
  const words = branchName.split("/");

  const prefix = words[0];
  const issueNumber = words[1];
  const branchTitle = words[2];

  // // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  // console.log(`Hello ${nameToGreet}!`);
  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
