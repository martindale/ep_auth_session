exports.registerRoute = function(hook_name, args, cb) {
    args.app.get("/auth_session", function(req, res) {
		var r = '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">' + "\n";

		r += '<html>' + "\n";
		r += '<head>' + "\n";
		r += '<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">' + "\n";
		r += '</head>' + "\n";
		r += '<body>' + "\n";
		r += '<script type="text/javascript">' + "\n";

		if (req.query.sessionID) {
			r += 'document.cookie = "sessionID=' + req.query.sessionID + '; path=/;";' + "\n";
		}

		if (req.query.padName) {
			r += 'document.location.href="/p/' + req.query.padName + '";' + "\n";
		}

		r += '</script>' + "\n";
		r += '</body>' + "\n";
		r += '</html>' + "\n";

        res.send(r);
    });
};
