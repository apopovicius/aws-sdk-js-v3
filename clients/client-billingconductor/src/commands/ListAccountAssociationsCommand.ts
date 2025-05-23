// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListAccountAssociationsInput,
  ListAccountAssociationsOutput,
  ListAccountAssociationsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListAccountAssociationsCommand, se_ListAccountAssociationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAccountAssociationsCommand}.
 */
export interface ListAccountAssociationsCommandInput extends ListAccountAssociationsInput {}
/**
 * @public
 *
 * The output of {@link ListAccountAssociationsCommand}.
 */
export interface ListAccountAssociationsCommandOutput extends ListAccountAssociationsOutput, __MetadataBearer {}

/**
 * <p> This is a paginated call to list linked accounts that are linked to the payer account for
 *       the specified time period. If no information is provided, the current billing period is used.
 *       The response will optionally include the billing group that's associated with the linked
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListAccountAssociationsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListAccountAssociationsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // ListAccountAssociationsInput
 *   BillingPeriod: "STRING_VALUE",
 *   Filters: { // ListAccountAssociationsFilter
 *     Association: "STRING_VALUE",
 *     AccountId: "STRING_VALUE",
 *     AccountIds: [ // AccountIdFilterList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAccountAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAccountAssociationsOutput
 * //   LinkedAccounts: [ // AccountAssociationsList
 * //     { // AccountAssociationsListElement
 * //       AccountId: "STRING_VALUE",
 * //       BillingGroupArn: "STRING_VALUE",
 * //       AccountName: "STRING_VALUE",
 * //       AccountEmail: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAccountAssociationsCommandInput - {@link ListAccountAssociationsCommandInput}
 * @returns {@link ListAccountAssociationsCommandOutput}
 * @see {@link ListAccountAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListAccountAssociationsCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 *
 * @public
 */
export class ListAccountAssociationsCommand extends $Command
  .classBuilder<
    ListAccountAssociationsCommandInput,
    ListAccountAssociationsCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingConductor", "ListAccountAssociations", {})
  .n("BillingconductorClient", "ListAccountAssociationsCommand")
  .f(void 0, ListAccountAssociationsOutputFilterSensitiveLog)
  .ser(se_ListAccountAssociationsCommand)
  .de(de_ListAccountAssociationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAccountAssociationsInput;
      output: ListAccountAssociationsOutput;
    };
    sdk: {
      input: ListAccountAssociationsCommandInput;
      output: ListAccountAssociationsCommandOutput;
    };
  };
}
