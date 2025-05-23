// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListExclusionsRequest, ListExclusionsResponse } from "../models/models_0";
import { de_ListExclusionsCommand, se_ListExclusionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExclusionsCommand}.
 */
export interface ListExclusionsCommandInput extends ListExclusionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExclusionsCommand}.
 */
export interface ListExclusionsCommandOutput extends ListExclusionsResponse, __MetadataBearer {}

/**
 * <p>List exclusions that are generated by the assessment run.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListExclusionsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListExclusionsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // ListExclusionsRequest
 *   assessmentRunArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListExclusionsCommand(input);
 * const response = await client.send(command);
 * // { // ListExclusionsResponse
 * //   exclusionArns: [ // ListReturnedArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExclusionsCommandInput - {@link ListExclusionsCommandInput}
 * @returns {@link ListExclusionsCommandOutput}
 * @see {@link ListExclusionsCommandInput} for command's `input` shape.
 * @see {@link ListExclusionsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @public
 */
export class ListExclusionsCommand extends $Command
  .classBuilder<
    ListExclusionsCommandInput,
    ListExclusionsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("InspectorService", "ListExclusions", {})
  .n("InspectorClient", "ListExclusionsCommand")
  .f(void 0, void 0)
  .ser(se_ListExclusionsCommand)
  .de(de_ListExclusionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExclusionsRequest;
      output: ListExclusionsResponse;
    };
    sdk: {
      input: ListExclusionsCommandInput;
      output: ListExclusionsCommandOutput;
    };
  };
}
