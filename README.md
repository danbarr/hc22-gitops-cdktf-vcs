# Example CDKTF VCS workflow

[![Synthesize Terraform configuration](https://github.com/danbarr/hc22-gitops-cdktf-vcs/actions/workflows/synth.yaml/badge.svg)](https://github.com/danbarr/hc22-gitops-cdktf-vcs/actions/workflows/synth.yaml)

This project uses a GitHub action to run `cdktf synth` on a PR, commit the synthesized Terraform JSON configuration back into the repo, which is then picked up by the Terraform Cloud integration to plan (PR) or apply (main) the VCS-backed workspace.
