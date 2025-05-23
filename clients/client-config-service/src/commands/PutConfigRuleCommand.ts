// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutConfigRuleRequest } from "../models/models_1";
import { de_PutConfigRuleCommand, se_PutConfigRuleCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutConfigRuleCommand}.
 */
export interface PutConfigRuleCommandInput extends PutConfigRuleRequest {}
/**
 * @public
 *
 * The output of {@link PutConfigRuleCommand}.
 */
export interface PutConfigRuleCommandOutput extends __MetadataBearer {}

/**
 * <p>Adds or updates an Config rule to evaluate if your
 * 			Amazon Web Services resources comply with your desired configurations. For information on how many Config rules you can have per account,
 * 			see <a href="https://docs.aws.amazon.com/config/latest/developerguide/configlimits.html">
 *                <b>Service Limits</b>
 *             </a> in the <i>Config Developer Guide</i>.</p>
 *          <p>There are two types of rules: <i>Config Managed Rules</i> and <i>Config Custom Rules</i>.
 * 			You can use <code>PutConfigRule</code> to create both Config Managed Rules and  Config Custom Rules.</p>
 *          <p>Config Managed Rules are predefined,
 * 			customizable rules created by Config. For a list of managed rules, see
 * 			<a href="https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html">List of Config
 * 				Managed Rules</a>. If you are adding an Config managed rule, you must specify the
 * 			rule's identifier for the <code>SourceIdentifier</code> key.</p>
 *          <p>Config Custom Rules are rules that you create from scratch. There are two ways to create Config custom rules: with Lambda functions
 * 			(<a href="https://docs.aws.amazon.com/config/latest/developerguide/gettingstarted-concepts.html#gettingstarted-concepts-function"> Lambda Developer Guide</a>) and with Guard (<a href="https://github.com/aws-cloudformation/cloudformation-guard">Guard GitHub
 * 					Repository</a>), a policy-as-code language.
 *
 * 			Config custom rules created with Lambda
 * 			are called <i>Config Custom Lambda Rules</i> and Config custom rules created with
 * 			Guard are called <i>Config Custom Policy Rules</i>.</p>
 *          <p>If you are adding a new Config Custom Lambda rule,
 * 			you first need to create an Lambda function that the rule invokes to evaluate
 * 			your resources. When you use <code>PutConfigRule</code> to add a Custom Lambda rule to Config, you must specify the Amazon Resource
 * 			Name (ARN) that Lambda assigns to the function. You specify the ARN
 * 			in the <code>SourceIdentifier</code> key. This key is part of the
 * 			<code>Source</code> object, which is part of the
 * 			<code>ConfigRule</code> object. </p>
 *          <p>For any new Config rule that you add, specify the
 * 				<code>ConfigRuleName</code> in the <code>ConfigRule</code>
 * 			object. Do not specify the <code>ConfigRuleArn</code> or the
 * 			<code>ConfigRuleId</code>. These values are generated by Config for new rules.</p>
 *          <p>If you are updating a rule that you added previously, you can
 * 			specify the rule by <code>ConfigRuleName</code>,
 * 				<code>ConfigRuleId</code>, or <code>ConfigRuleArn</code> in the
 * 				<code>ConfigRule</code> data type that you use in this
 * 			request.</p>
 *          <p>For more information about developing and using Config
 * 			rules, see <a href="https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config.html">Evaluating Resources with Config Rules</a>
 * 			in the <i>Config Developer Guide</i>.</p>
 *          <note>
 *             <p>
 *                <b>Tags are added at creation and cannot be updated with this operation</b>
 *             </p>
 *             <p>
 *                <code>PutConfigRule</code> is an idempotent API. Subsequent requests won’t create a duplicate resource if one was already created. If a following request has different <code>tags</code> values,
 * 			Config will ignore these differences and treat it as an idempotent request of the previous. In this case, <code>tags</code> will not be updated, even if they are different.</p>
 *             <p>Use <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_TagResource.html">TagResource</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_UntagResource.html">UntagResource</a> to update tags after creation.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutConfigRuleCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutConfigRuleCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // PutConfigRuleRequest
 *   ConfigRule: { // ConfigRule
 *     ConfigRuleName: "STRING_VALUE",
 *     ConfigRuleArn: "STRING_VALUE",
 *     ConfigRuleId: "STRING_VALUE",
 *     Description: "STRING_VALUE",
 *     Scope: { // Scope
 *       ComplianceResourceTypes: [ // ComplianceResourceTypes
 *         "STRING_VALUE",
 *       ],
 *       TagKey: "STRING_VALUE",
 *       TagValue: "STRING_VALUE",
 *       ComplianceResourceId: "STRING_VALUE",
 *     },
 *     Source: { // Source
 *       Owner: "CUSTOM_LAMBDA" || "AWS" || "CUSTOM_POLICY", // required
 *       SourceIdentifier: "STRING_VALUE",
 *       SourceDetails: [ // SourceDetails
 *         { // SourceDetail
 *           EventSource: "aws.config",
 *           MessageType: "ConfigurationItemChangeNotification" || "ConfigurationSnapshotDeliveryCompleted" || "ScheduledNotification" || "OversizedConfigurationItemChangeNotification",
 *           MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 *         },
 *       ],
 *       CustomPolicyDetails: { // CustomPolicyDetails
 *         PolicyRuntime: "STRING_VALUE", // required
 *         PolicyText: "STRING_VALUE", // required
 *         EnableDebugLogDelivery: true || false,
 *       },
 *     },
 *     InputParameters: "STRING_VALUE",
 *     MaximumExecutionFrequency: "One_Hour" || "Three_Hours" || "Six_Hours" || "Twelve_Hours" || "TwentyFour_Hours",
 *     ConfigRuleState: "ACTIVE" || "DELETING" || "DELETING_RESULTS" || "EVALUATING",
 *     CreatedBy: "STRING_VALUE",
 *     EvaluationModes: [ // EvaluationModes
 *       { // EvaluationModeConfiguration
 *         Mode: "DETECTIVE" || "PROACTIVE",
 *       },
 *     ],
 *   },
 *   Tags: [ // TagsList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PutConfigRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutConfigRuleCommandInput - {@link PutConfigRuleCommandInput}
 * @returns {@link PutConfigRuleCommandOutput}
 * @see {@link PutConfigRuleCommandInput} for command's `input` shape.
 * @see {@link PutConfigRuleCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InsufficientPermissionsException} (client fault)
 *  <p>Indicates one of the following errors:</p>
 *          <ul>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the rule cannot be created because the IAM role assigned to Config lacks permissions to perform the config:Put* action.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigRule.html">PutConfigRule</a>, the Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConfigRule.html">PutOrganizationConfigRule</a>, organization Config rule cannot be created because you do not have permissions to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConformancePack.html">PutConformancePack</a> and <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutOrganizationConformancePack.html">PutOrganizationConformancePack</a>, a conformance pack cannot be created because you do not have the following permissions: </p>
 *                <ul>
 *                   <li>
 *                      <p>You do not have permission to call IAM <code>GetRole</code> action or create a service-linked role.</p>
 *                   </li>
 *                   <li>
 *                      <p>You do not have permission to read Amazon S3 bucket or call SSM:GetDocument.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>For <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutServiceLinkedConfigurationRecorder.html">PutServiceLinkedConfigurationRecorder</a>, a service-linked configuration recorder cannot be created because you do not have the following permissions: IAM <code>CreateServiceLinkedRole</code>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link MaxNumberOfConfigRulesExceededException} (client fault)
 *  <p>Failed to add the Config rule because the account already
 * 			contains the maximum number of 1000 rules. Consider deleting any
 * 			deactivated rules before you add new rules.</p>
 *
 * @throws {@link NoAvailableConfigurationRecorderException} (client fault)
 *  <p>There are no customer managed configuration recorders available to record your resources. Use the <a href="https://docs.aws.amazon.com/config/latest/APIReference/API_PutConfigurationRecorder.html">PutConfigurationRecorder</a> operation to create the customer managed configuration
 * 			recorder.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>You see this exception in the following cases: </p>
 *          <ul>
 *             <li>
 *                <p>For DeleteConfigRule, Config is deleting this rule. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, the rule is deleting your evaluation results. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConfigRule, a remediation action is associated with the rule and Config cannot delete this rule. Delete the remediation action associated with the rule before deleting the rule and try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConfigOrganizationRule, organization Config rule deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteOrganizationConfigRule, organization Config rule creation is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For PutConformancePack and PutOrganizationConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *             <li>
 *                <p>For DeleteConformancePack, a conformance pack creation, update, and deletion is in progress. Try your request again later.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class PutConfigRuleCommand extends $Command
  .classBuilder<
    PutConfigRuleCommandInput,
    PutConfigRuleCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "PutConfigRule", {})
  .n("ConfigServiceClient", "PutConfigRuleCommand")
  .f(void 0, void 0)
  .ser(se_PutConfigRuleCommand)
  .de(de_PutConfigRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutConfigRuleRequest;
      output: {};
    };
    sdk: {
      input: PutConfigRuleCommandInput;
      output: PutConfigRuleCommandOutput;
    };
  };
}
