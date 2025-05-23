// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ResetPasswordRequest,
  ResetPasswordRequestFilterSensitiveLog,
  ResetPasswordResponse,
} from "../models/models_0";
import { de_ResetPasswordCommand, se_ResetPasswordCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetPasswordCommand}.
 */
export interface ResetPasswordCommandInput extends ResetPasswordRequest {}
/**
 * @public
 *
 * The output of {@link ResetPasswordCommand}.
 */
export interface ResetPasswordCommandOutput extends ResetPasswordResponse, __MetadataBearer {}

/**
 * <p>Allows the administrator to reset the password for a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, ResetPasswordCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, ResetPasswordCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const input = { // ResetPasswordRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 * };
 * const command = new ResetPasswordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResetPasswordCommandInput - {@link ResetPasswordCommandInput}
 * @returns {@link ResetPasswordCommandOutput}
 * @see {@link ResetPasswordCommandInput} for command's `input` shape.
 * @see {@link ResetPasswordCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link DirectoryServiceAuthenticationFailedException} (client fault)
 *  <p>The directory service doesn't recognize the credentials supplied by WorkMail.</p>
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *  <p>The directory is unavailable. It might be located in another Region or deleted.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>The identifier supplied for the user, group, or resource does not exist in your
 *          organization.</p>
 *
 * @throws {@link EntityStateException} (client fault)
 *  <p>You are performing an operation on a user, group, or resource that isn't in the
 *          expected state, such as trying to delete an active user.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>The supplied password doesn't match the minimum security constraints, such as length
 *          or use of special characters.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>You can't perform a write operation against a read-only directory.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class ResetPasswordCommand extends $Command
  .classBuilder<
    ResetPasswordCommandInput,
    ResetPasswordCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkMailService", "ResetPassword", {})
  .n("WorkMailClient", "ResetPasswordCommand")
  .f(ResetPasswordRequestFilterSensitiveLog, void 0)
  .ser(se_ResetPasswordCommand)
  .de(de_ResetPasswordCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetPasswordRequest;
      output: {};
    };
    sdk: {
      input: ResetPasswordCommandInput;
      output: ResetPasswordCommandOutput;
    };
  };
}
