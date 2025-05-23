// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBlueGreenDeploymentRequest, CreateBlueGreenDeploymentResponse } from "../models/models_0";
import { de_CreateBlueGreenDeploymentCommand, se_CreateBlueGreenDeploymentCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBlueGreenDeploymentCommand}.
 */
export interface CreateBlueGreenDeploymentCommandInput extends CreateBlueGreenDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CreateBlueGreenDeploymentCommand}.
 */
export interface CreateBlueGreenDeploymentCommandOutput extends CreateBlueGreenDeploymentResponse, __MetadataBearer {}

/**
 * <p>Creates a blue/green deployment.</p>
 *          <p>A blue/green deployment creates a staging environment that copies the production environment.
 *             In a blue/green deployment, the blue environment is the current production environment.
 *             The green environment is the staging environment, and it stays in sync
 *             with the current production environment.</p>
 *          <p>You can make changes to the databases in the green environment without affecting
 *             production workloads. For example, you can upgrade the major or minor DB engine version, change
 *             database parameters, or make schema changes in the staging environment. You can thoroughly test
 *             changes in the green environment. When ready, you can switch over the environments to promote the
 *             green environment to be the new production environment. The switchover typically takes under a minute.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
 *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
 *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateBlueGreenDeploymentCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateBlueGreenDeploymentCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // CreateBlueGreenDeploymentRequest
 *   BlueGreenDeploymentName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE", // required
 *   TargetEngineVersion: "STRING_VALUE",
 *   TargetDBParameterGroupName: "STRING_VALUE",
 *   TargetDBClusterParameterGroupName: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   TargetDBInstanceClass: "STRING_VALUE",
 *   UpgradeTargetStorageConfig: true || false,
 *   TargetIops: Number("int"),
 *   TargetStorageType: "STRING_VALUE",
 *   TargetAllocatedStorage: Number("int"),
 *   TargetStorageThroughput: Number("int"),
 * };
 * const command = new CreateBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateBlueGreenDeploymentResponse
 * //   BlueGreenDeployment: { // BlueGreenDeployment
 * //     BlueGreenDeploymentIdentifier: "STRING_VALUE",
 * //     BlueGreenDeploymentName: "STRING_VALUE",
 * //     Source: "STRING_VALUE",
 * //     Target: "STRING_VALUE",
 * //     SwitchoverDetails: [ // SwitchoverDetailList
 * //       { // SwitchoverDetail
 * //         SourceMember: "STRING_VALUE",
 * //         TargetMember: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tasks: [ // BlueGreenDeploymentTaskList
 * //       { // BlueGreenDeploymentTask
 * //         Name: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "STRING_VALUE",
 * //     StatusDetails: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateBlueGreenDeploymentCommandInput - {@link CreateBlueGreenDeploymentCommandInput}
 * @returns {@link CreateBlueGreenDeploymentCommandOutput}
 * @see {@link CreateBlueGreenDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateBlueGreenDeploymentCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link BlueGreenDeploymentAlreadyExistsFault} (client fault)
 *  <p>A blue/green deployment with the specified name already exists.</p>
 *
 * @throws {@link DBClusterNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.</p>
 *
 * @throws {@link DBClusterParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing DB
 *             cluster parameter group.</p>
 *
 * @throws {@link DBClusterQuotaExceededFault} (client fault)
 *  <p>The user attempted to create a new DB cluster and the user has already reached the
 *             maximum allowed DB cluster quota.</p>
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link InstanceQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             instances.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link SourceClusterNotSupportedFault} (client fault)
 *  <p>The source DB cluster isn't supported for a blue/green deployment.</p>
 *
 * @throws {@link SourceDatabaseNotSupportedFault} (client fault)
 *  <p>The source DB instance isn't supported for a blue/green deployment.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class CreateBlueGreenDeploymentCommand extends $Command
  .classBuilder<
    CreateBlueGreenDeploymentCommandInput,
    CreateBlueGreenDeploymentCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "CreateBlueGreenDeployment", {})
  .n("RDSClient", "CreateBlueGreenDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_CreateBlueGreenDeploymentCommand)
  .de(de_CreateBlueGreenDeploymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBlueGreenDeploymentRequest;
      output: CreateBlueGreenDeploymentResponse;
    };
    sdk: {
      input: CreateBlueGreenDeploymentCommandInput;
      output: CreateBlueGreenDeploymentCommandOutput;
    };
  };
}
