// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetWebACLForResourceRequest, GetWebACLForResourceResponse } from "../models/models_0";
import { de_GetWebACLForResourceCommand, se_GetWebACLForResourceCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWebACLForResourceCommand}.
 */
export interface GetWebACLForResourceCommandInput extends GetWebACLForResourceRequest {}
/**
 * @public
 *
 * The output of {@link GetWebACLForResourceCommand}.
 */
export interface GetWebACLForResourceCommandOutput extends GetWebACLForResourceResponse, __MetadataBearer {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic Regional</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Returns the web ACL for the specified resource, either an application load balancer or Amazon API Gateway stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFRegionalClient, GetWebACLForResourceCommand } from "@aws-sdk/client-waf-regional"; // ES Modules import
 * // const { WAFRegionalClient, GetWebACLForResourceCommand } = require("@aws-sdk/client-waf-regional"); // CommonJS import
 * const client = new WAFRegionalClient(config);
 * const input = { // GetWebACLForResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetWebACLForResourceCommand(input);
 * const response = await client.send(command);
 * // { // GetWebACLForResourceResponse
 * //   WebACLSummary: { // WebACLSummary
 * //     WebACLId: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetWebACLForResourceCommandInput - {@link GetWebACLForResourceCommandInput}
 * @returns {@link GetWebACLForResourceCommandOutput}
 * @see {@link GetWebACLForResourceCommandInput} for command's `input` shape.
 * @see {@link GetWebACLForResourceCommandOutput} for command's `response` shape.
 * @see {@link WAFRegionalClientResolvedConfig | config} for WAFRegionalClient's `config` shape.
 *
 * @throws {@link WAFInternalErrorException} (server fault)
 *  <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 *
 * @throws {@link WAFInvalidAccountException} (client fault)
 *  <p>The operation failed because you tried to create, update, or delete an object by using an invalid account identifier.</p>
 *
 * @throws {@link WAFInvalidParameterException} (client fault)
 *  <p>The operation failed because AWS WAF didn't recognize a parameter in the request. For example:</p>
 * 			      <ul>
 *             <li>
 *                <p>You specified an invalid parameter name.</p>
 *             </li>
 *             <li>
 *                <p>You specified an invalid value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update an object (<code>ByteMatchSet</code>, <code>IPSet</code>, <code>Rule</code>, or <code>WebACL</code>)
 * 					using an action other than <code>INSERT</code> or <code>DELETE</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to create a <code>WebACL</code> with a <code>DefaultAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 * 		 	           <p>You tried to create a <code>RateBasedRule</code> with a <code>RateKey</code> value other than <code>IP</code>.</p>
 * 		          </li>
 *             <li>
 *                <p>You tried to update a <code>WebACL</code> with a <code>WafAction</code>
 *                   <code>Type</code> other than
 * 					<code>ALLOW</code>, <code>BLOCK</code>, or <code>COUNT</code>.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>FieldToMatch</code>
 *                   <code>Type</code> other than
 * 					HEADER, METHOD, QUERY_STRING, URI, or BODY.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a <code>ByteMatchSet</code> with a <code>Field</code> of <code>HEADER</code>
 * 					but no value for <code>Data</code>.</p>
 *             </li>
 *             <li>
 * 			   		       <p>Your request references an ARN that is malformed, or corresponds to a resource with which a web ACL cannot be associated.</p>
 * 			   	     </li>
 *          </ul>
 *
 * @throws {@link WAFNonexistentItemException} (client fault)
 *  <p>The operation failed because the referenced object doesn't exist.</p>
 *
 * @throws {@link WAFUnavailableEntityException} (client fault)
 *  <p>The operation failed because the entity
 *       referenced is temporarily unavailable. Retry your request.</p>
 *
 * @throws {@link WAFRegionalServiceException}
 * <p>Base exception class for all service exceptions from WAFRegional service.</p>
 *
 *
 * @public
 */
export class GetWebACLForResourceCommand extends $Command
  .classBuilder<
    GetWebACLForResourceCommandInput,
    GetWebACLForResourceCommandOutput,
    WAFRegionalClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WAFRegionalClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSWAF_Regional_20161128", "GetWebACLForResource", {})
  .n("WAFRegionalClient", "GetWebACLForResourceCommand")
  .f(void 0, void 0)
  .ser(se_GetWebACLForResourceCommand)
  .de(de_GetWebACLForResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWebACLForResourceRequest;
      output: GetWebACLForResourceResponse;
    };
    sdk: {
      input: GetWebACLForResourceCommandInput;
      output: GetWebACLForResourceCommandOutput;
    };
  };
}
