{ pkgs }: {
	deps = [
		pkgs.nailgun
  pkgs.nodePackages.prettier
		pkgs.hol
  pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
}