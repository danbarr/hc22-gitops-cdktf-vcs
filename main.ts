import { Construct } from "constructs";
import { App, TerraformStack, TerraformOutput } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws/lib/provider";
import { Instance } from "@cdktf/provider-aws/lib/instance";
import { Tfvars } from "./variables"

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const vars = new Tfvars(this, "main")

    new AwsProvider(this, "AWS", {
      region: vars.awsRegion,
    });

    const instance = new Instance(this, "compute", {
      ami: vars.amiId,
      instanceType: "t3.large",
      tags: {
        Name: "CDKTF-Demo",
        Environment: "dev"
      }
    });

    new TerraformOutput(this, "public_ip", {
      value: instance.publicIp,
    });
  }
}

const app = new App();
new MyStack(app, "hc22-gitops-cdktf");
app.synth();
