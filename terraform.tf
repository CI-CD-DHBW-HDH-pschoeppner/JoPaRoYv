terraform {
    required_providers {
        digitalocean = {
            source = "digitalocean/digitalocean"
            version= "~> 2.0"
        }
    }
}

provider "digitalocean" {
  token = "[INSERT TOKEN HERE]"
}

resource "digitalocean_droplet" "web" {
  image  = "docker-20-04"
  name   = "tic-tac-toe"
  region = "fra1"
  size   = "s-1vcpu-1gb"

  connection {
    user        = "root"
    type        = "ssh"
    private_key = "${file(var.private_key)}"
    timeout     = "2m"
  }

  provisioner "remote-exec" {
    inline = [
      "docker run --rm -d -name tictactoe-frontend ghrc.io/ci-cd-dhbw-hdh-pschoeppner/joparoyv:latest -p 80:5175",
    ]
  }
}

output "public_ip" {
    value = digitalocean_droplet.web.ipv4_address
}

