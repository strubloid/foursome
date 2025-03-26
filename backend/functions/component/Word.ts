import { Router, Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { FoursomeRouter } from "../foursomeRouter";

export class Word implements FoursomeRouter {
  public router: Router;

  /**
   * Starting the word component.
   * @param router 
   */
  constructor(router: Router) {
    this.router = router;
  }

  /**
   * Starting the routes of the Word component.
   */
  public initializeRoutes(): void {

    this.router.post("/api/component/word", (req: any, res: any) => {

      let body = req.body;
      let jsonResponse : any = {};

      if(req.body.word !== undefined){
          jsonResponse = { word : req.body.word };         
      } else {
          return res.status(400).json({ word: "Word is required" });
      }
      
      return res.json(jsonResponse);

  });


//   this.router.post("/api/process-word", (req: any, res: any) => {

//     let body = req.body;
//     let jsonResponse : any = {};

//     if(req.body.word !== undefined){
//         jsonResponse = { word : req.body.word };         
//     } else {
//         return res.status(400).json({ word: "Word is required" });
//     }
    
//     return res.json(jsonResponse);

// });

  }
}
