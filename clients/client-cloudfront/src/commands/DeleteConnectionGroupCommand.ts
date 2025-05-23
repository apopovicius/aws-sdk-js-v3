// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConnectionGroupRequest } from "../models/models_1";
import { de_DeleteConnectionGroupCommand, se_DeleteConnectionGroupCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConnectionGroupCommand}.
 */
export interface DeleteConnectionGroupCommandInput extends DeleteConnectionGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionGroupCommand}.
 */
export interface DeleteConnectionGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a connection group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteConnectionGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteConnectionGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DeleteConnectionGroupRequest
 *   Id: "STRING_VALUE", // required
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionGroupCommandInput - {@link DeleteConnectionGroupCommandInput}
 * @returns {@link DeleteConnectionGroupCommandOutput}
 * @see {@link DeleteConnectionGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link CannotDeleteEntityWhileInUse} (client fault)
 *  <p>The entity cannot be deleted while it is in use.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *  <p>The <code>If-Match</code> version is missing or not valid.</p>
 *
 * @throws {@link PreconditionFailed} (client fault)
 *  <p>The precondition in one or more of the request fields evaluated to
 * 			<code>false</code>.</p>
 *
 * @throws {@link ResourceNotDisabled} (client fault)
 *  <p>The specified CloudFront resource hasn't been disabled yet.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class DeleteConnectionGroupCommand extends $Command
  .classBuilder<
    DeleteConnectionGroupCommandInput,
    DeleteConnectionGroupCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "DeleteConnectionGroup", {})
  .n("CloudFrontClient", "DeleteConnectionGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConnectionGroupCommand)
  .de(de_DeleteConnectionGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectionGroupCommandInput;
      output: DeleteConnectionGroupCommandOutput;
    };
  };
}
