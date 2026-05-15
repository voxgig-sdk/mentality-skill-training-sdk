package utility

import "github.com/voxgig-sdk/mentality-skill-training-sdk/core"

func prepareBodyUtil(ctx *core.Context) any {
	op := ctx.Op

	if op.Input == "data" {
		body := ctx.Utility.TransformRequest(ctx)
		return body
	}

	return nil
}
